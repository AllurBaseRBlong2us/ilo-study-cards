const DECKS = [
  {
    id: "permissives",
    name: "Permissives",
    shortName: "P's",
    cards: [
      {
        id: "P-4",
        title: "Reactor Trip",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Reactor Trip & Bypass Breakers - OPEN Train Specific", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "RTBs & Bypass Open (Train Specific)", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Allows manual reset of Safety Injection (SI) after 60-second time delay", sub: false },
              { text: "Blocks automatic SI actuation after manual reset", sub: true },
              { text: "Transfers Steam Dump Control from Load Rejection to Plant Trip controller", sub: false },
              { text: "Train A sets Steam Dump setpoint to 559\u00b0F, Train B sets to 557\u00b0F", sub: true },
              { text: "Trips Main Turbine", sub: false },
              { text: "Isolates Main Feedwater when coincident with Low Tavg (564\u00b0F) signal (2/4 logic)", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Ensures secondary plant systems respond correctly to a reactor trip", sub: false },
              { text: "Avoids excessive RCS cooldown during transition from emergency stabilization to recovery", sub: true }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Turbine Trip prevents excessive RCS cooldown by stopping steam draw", sub: false },
              { text: "MFW Isolation (w/ Low Tavg) halts cold feedwater addition to prevent excessive cooldown transient", sub: false },
              { text: "SI Reset/Block allows operators manual control of ECCS post-accident", sub: false },
              { text: "2\u00b0F delta in Steam Dump controllers prevents overcooling from competing controllers if an RTB fails to open", sub: true }
            ]
          }
        ]
      },
      {
        id: "P-6",
        title: "Source Range Block",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "1E-10 amps on Intermediate Range channels", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/2 IR channels (ascending)", sub: false },
              { text: "2/2 IR channels (descending \u2014 resets permissive)", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Allows manual block of SR channels", sub: false },
              { text: "Bypasses SR High Flux Reactor Trip", sub: true },
              { text: "Removes HV from SR detectors", sub: true },
              { text: "On reset: reinstates SR detectors & trips", sub: false },
              { text: "Re-enables SR Flux Doubling for boron dilution monitoring", sub: true }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Overlap NIS coverage between SR and IR during startup", sub: false },
              { text: "Protect SR detectors (BF\u2083 gas) from damage at higher flux", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "SR trip bypass allows ascent past SR range without spurious trip", sub: false },
              { text: "HV removal prevents BF\u2083 gas breakdown", sub: false },
              { text: "On shutdown, P-6 reset restores Flux Doubling for inadvertent dilution protection", sub: false }
            ]
          }
        ]
      },
      {
        id: "P-7",
        title: "Low Power Reactor Trips Block",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Reactor power or turbine load > 10%", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 Power Range channels > 10% power (via P-10) OR Turbine First Stage Pressure > 10% equivalent (via P-13)", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "When > 10%, enables (unblocks) the following Reactor Trips:", sub: false },
              { text: "Pressurizer Water Level \u2014 High (2/3 > 92%)", sub: true },
              { text: "Underfrequency on RCPs", sub: true },
              { text: "Undervoltage on RCPs", sub: true },
              { text: "RCS Low Flow in 2 or more loops (2/3 < 89.9% flow)", sub: true },
              { text: "Pressurizer Pressure \u2014 Low (\u2264 1940 psig)", sub: true },
              { text: "Below 10%, these trips are blocked", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Automatically blocks certain reactor trips at low power where not needed for protection", sub: false },
              { text: "Enables those protection trips as power increases above 10%", sub: true }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "At < 10% power, significantly more margin to DNBR limits exists", sub: false },
              { text: "Core can tolerate larger/slower transients at low power", sub: true },
              { text: "Loss of coolant flow at < 10% does not pose severe threat to thermal limits", sub: false },
              { text: "Prevents unnecessary trips during low-power testing or startup", sub: true }
            ]
          }
        ]
      },
      {
        id: "P-8",
        title: "Power Range Neutron Flux",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Reactor power > 48% RTP", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 Power Range Nuclear Instrumentation channels", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Enables (unblocks) Reactor Trip on low flow in any single RCS loop", sub: false },
              { text: "Below 48%, single-loop low flow trip is blocked", sub: true }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Enables single-loop loss of flow reactor trip on increasing power to protect core thermal limits", sub: false },
              { text: "Above 48%, trip occurs if flow drops < 89.9% in any 1 loop (2/3 flow channels)", sub: true }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Above 48% power, loss of single RCP could result in DNB conditions", sub: false },
              { text: "Below 48%, core not producing sufficient heat for DNB concern from single pump loss", sub: false },
              { text: "Blocking below P-8 avoids unnecessary trips due to normal flow variations", sub: true }
            ]
          }
        ]
      },
      {
        id: "P-9",
        title: "Power Range Neutron Flux",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Reactor power > 50% RTP", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 Power Range Nuclear Instrumentation channels", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Enables Reactor Trips from Turbine Trip:", sub: false },
              { text: "EHC <590# (2/3)", sub: true },
              { text: "Stop Valve Position > 1% from full open (< 99% open) (4/4)", sub: true },
              { text: "Below 50% (3/4 < 50%), turbine trip will not produce automatic reactor trip", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Enables direct reactor trip upon turbine trip at higher power levels", sub: false },
              { text: "Minimizes pressure/temperature transient on the reactor", sub: true }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Above P-9: load rejection beyond Steam Dump and Reactivity Control capacity \u2014 reactor trip required", sub: false },
              { text: "Below P-9: Steam Dump System can accommodate the load rejection alone", sub: false }
            ]
          }
        ]
      },
      {
        id: "P-10",
        title: "Nuclear at Power",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Reactor power > 10% RTP", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 Power Range Nuclear Instrumentation channels", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "On increasing power:", sub: false },
              { text: "Allows manual block of IR Neutron Flux trip/rod stop and PR Neutron Flux \u2014 Low trip (25%)", sub: true },
              { text: "Automatically backs up SR Neutron Flux trip block and de-energizes SR detectors", sub: true },
              { text: "Provides 1 of 2 inputs to actuate P-7", sub: true },
              { text: "On decreasing power (3/4 < 10%):", sub: false },
              { text: "Automatically reinstates PR \u2014 Low and IR trips/rod stop", sub: true }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Coordinates protection overlap between NIS ranges", sub: false },
              { text: "Allows block of low-power trips during ascension", sub: true },
              { text: "Ensures trips are active for core protection at high power", sub: true }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Above 10%, PR High Setpoint trip (109%) and P-7 trips provide adequate protection", sub: false },
              { text: "IR, SR, and PR Low Setpoint trips no longer necessary at power", sub: true },
              { text: "On shutdown, low-range trips automatically reinstated < 10% for reactivity excursion protection", sub: false }
            ]
          }
        ]
      },
      {
        id: "P-11",
        title: "Pressurizer Pressure",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Pressurizer Pressure < 1970 psig", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/3 pressurizer pressure channels", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "When < 1970 psig, allows manual block of:", sub: false },
              { text: "Low PZR press SI, \u22641830#", sub: true },
              { text: "Low Stm Line SI \u2264 615#", sub: true },
              { text: "Low Stm Line MSLIS \u2264 615#", sub: true },
              { text: "Automatically enables Steam Line Pressure \u2014 Negative Rate \u2014 Inserts -100#/50 sec. MSLIS", sub: false },
              { text: "When > 1970 psig, signals automatically reinstate", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Permits normal controlled unit cooldown and depressurization", sub: false },
              { text: "Prevents triggering spurious SI or Main Steam Line isolation signals", sub: true }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "During normal cooldown, pressure decreases would trigger LOCA/SLB protective responses without P-11", sub: false },
              { text: "Blocking Low signal automatically engages rate-of-change protection (Negative Rate \u2014 High)", sub: false },
              { text: "Rapid pressure drop from SLB still isolates steam lines; slow controlled drop does not", sub: true }
            ]
          }
        ]
      },
      {
        id: "P-12",
        title: "Low-Low Tavg",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Tavg < 550\u00b0F", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 RCS loops <550\u00b0F Isolates Steam Dumps", sub: false },
              { text: "3/4 channels > 550\u00b0F Auto Reenables Dumps", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Removes arming signal from Steam Dump system (de-energizes P-12 solenoids)", sub: false },
              { text: "Blocks all condenser and atmospheric Steam Dump valves from opening", sub: true },
              { text: "Forces any currently open valves to safely close", sub: true }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Provides protection against excessive RCS cooldown by isolating the Steam Dump System", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Failed-open steam dumps would cause excessive primary cooldown", sub: false },
              { text: "Negative moderator temperature coefficient adds positive reactivity during cooldown", sub: true },
              { text: "Severe overcooling challenges pressurized thermal shock (PTS) limits", sub: true },
              { text: "550\u00b0F setpoint allows initial undershoot below HZP Tavg (557\u00b0F) while preventing severe overcooling", sub: false }
            ]
          }
        ]
      },
      {
        id: "P-13",
        title: "Turbine Impulse Chamber Pressure",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Turbine First Stage Pressure corresponds to ~10% full turbine power", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/2 Turbine Impulse Pressure channels", sub: false },
              { text: "AC PT-505,506", sub: false },
              { text: "10% PR = 72# impulse pressure", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Provides 1 of 2 inputs to actuate P-7 (other is P-10)", sub: false },
              { text: "When P-7 actuates, enables Pressurizer Low Pressure, High Water Level, Low RCS Flow, and RCP UV/UF trips", sub: true },
              { text: "When < 10% on both P-10 and P-13, P-7 clears and blocks these trips", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Monitors turbine load as redundant, diverse input to P-7 interlock", sub: false },
              { text: "Backs up P-10 (Nuclear at Power) interlock", sub: true }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Turbine first stage pressure is directly proportional to turbine load \u2014 reliable diverse power measurement", sub: false },
              { text: "Ensures P-7 actuates even if NIS (P-10) is inaccurate, failing, or shielded", sub: false },
              { text: "Redundant OR logic guarantees core protection trips enabled at > 10% power", sub: true }
            ]
          }
        ]
      },
      {
        id: "P-14",
        title: "Steam Generator Water Level \u2014 High High",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Narrow Range water level in any single SG increases to 78%", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 level channels on that specific Steam Generator", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Immediately trips the main turbine", sub: false },
              { text: "Closes all Main Feedwater Control Valves, Isolation Valves, and trips MFW Pumps", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Provides protection against excessive feedwater flow", sub: false },
              { text: "Prevents overfill of Steam Generators", sub: true }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Protects main turbine and steam piping from moisture carryover (water induction) damage", sub: false },
              { text: "Isolating MFW limits cold feedwater addition, backup protection against excessive RCS cooldown", sub: false }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "control-interlocks",
    name: "Control Interlocks",
    shortName: "C's",
    cards: [
      {
        id: "C-1",
        title: "Intermediate Range Overpower Rod Stop",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Intermediate Range reaches current equivalent to 20% RTP", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/2 Intermediate Range (IR) channels", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Blocks all outward (withdrawal) control rod motion in manual and automatic modes", sub: false },
              { text: "Inward rod motion (insertion) always remains available", sub: true },
              { text: "Generates an alarm", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Halts positive reactivity addition from rod withdrawal if IR power becomes excessive during startup", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Administrative safeguard during startup", sub: false },
              { text: "Defense-in-depth against uncontrolled power excursion before PR detectors and high flux trips take effect", sub: true }
            ]
          }
        ]
      },
      {
        id: "C-2",
        title: "Power Range Overpower Rod Stop",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Power Range (PR) channels reach 103% RTP", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/4 PR channels", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Blocks all outward (withdrawal) control rod motion in manual and automatic modes", sub: false },
              { text: "Generates an alarm", sub: true },
              { text: "Inward rod motion remains available", sub: false },
              { text: "Can be manually bypassed per channel via Miscellaneous Control & Indication Panel", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Halts positive reactivity addition from rod withdrawal if power exceeds normal operating band", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Stops outward rod motion at 103% to prevent reaching PR High Flux Reactor Trip (109%)", sub: false },
              { text: "Gives operator and control systems opportunity to stabilize power and avoid a complete reactor trip", sub: true }
            ]
          }
        ]
      },
      {
        id: "C-3",
        title: "OT\u0394T Rod Stop and Turbine Runback",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Calculated OT\u0394T setpoint approaches within 3% of actual OT\u0394T reactor trip setpoint", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/4 loop \u0394T channels \u2192 alarm", sub: false },
              { text: "2/4 loop \u0394T channels \u2192 actuates interlock", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Blocks all outward (withdrawal) control rod motion in manual and automatic modes", sub: false },
              { text: "Initiates automatic turbine runback at effective 10%/min", sub: false },
              { text: "Pulsing at 133%/min for 2.3s with 27.7s interval", sub: true }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Automatically reduces power and halts reactivity additions when approaching OT\u0394T trip condition", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "OT\u0394T trip protects core against DNB", sub: false },
              { text: "Rod stop prevents further power increases while runback reduces steam demand", sub: false },
              { text: "Designed to relieve OT\u0394T condition and restore DNB margin without tripping the reactor", sub: true }
            ]
          }
        ]
      },
      {
        id: "C-4",
        title: "OP\u0394T Rod Stop and Turbine Runback",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Calculated OP\u0394T setpoint approaches within 3% of actual OP\u0394T reactor trip setpoint", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/4 loop \u0394T channels \u2192 alarm", sub: false },
              { text: "2/4 loop \u0394T channels \u2192 actuates interlock", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Blocks all outward (withdrawal) control rod motion in manual and automatic modes", sub: false },
              { text: "Initiates automatic turbine runback at 10%/min", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Provides automatic actions to reduce power when approaching OP\u0394T trip condition", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "OP\u0394T trip protects fuel against excessive localized heat generation (kW/ft limits)", sub: false },
              { text: "Ensures fuel pellet integrity and prevents cladding damage during overpower", sub: true },
              { text: "Rod block + turbine runback mitigate condition while attempting to keep unit online", sub: false }
            ]
          }
        ]
      },
      {
        id: "C-5",
        title: "Low Power Automatic Rod Block",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Turbine first stage pressure (Pimp) drops < 108 psig (~15% equivalent reactor power)", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "Actuates on selected turbine impulse pressure channel", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Blocks automatic withdrawal of control rods", sub: false },
              { text: "Manual withdrawal, manual insertion, and automatic insertion remain available", sub: true }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Prevents Rod Control System from withdrawing rods in AUTO at low power", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "At very low power, steam flow and Pimp are extremely small and erratic", sub: false },
              { text: "Automatic rod control relies on Tavg/Tref mismatch (Tref derived from Pimp)", sub: true },
              { text: "Erratic indication could cause unstable/inappropriate rod movements", sub: true },
              { text: "Forces operator to maintain direct manual control over reactivity additions", sub: false }
            ]
          }
        ]
      },
      {
        id: "C-7",
        title: "Load Rejection Steam Dump Arming",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Turbine load reduction > 10% step or > 5%/min ramp", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "Selected turbine impulse pressure channel (typically AC PT-506)", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Arms steam dump control system for load rejection response", sub: false },
              { text: "Without arming, steam dump valves remain blocked from automatic opening", sub: true },
              { text: "When armed, system uses Tavg/Tref mismatch loop to modulate valves open", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Prepares Steam Dump System to accept sudden excess steam generation during load rejection", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Steam dumps mitigate sudden loss of secondary load by providing artificial steam load", sub: false },
              { text: "Prevents reactor trip on high pressure or high temperature", sub: true },
              { text: "Arming signal prevents spurious opening during normal minor plant fluctuations", sub: false }
            ]
          }
        ]
      },
      {
        id: "C-9",
        title: "Condenser Vacuum Steam Dump Block",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Condenser pressure drops < 5.0\" Hg Absolute (adequate vacuum)", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/2 pressure sensors per condenser shell (separate C-9 per shell)", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "When < 5.0\" HgA, provides arm permissive to steam dump valves for that shell", sub: false },
              { text: "If condenser pressure rises above setpoint (losing vacuum), C-9 is lost", sub: false },
              { text: "Automatically blocks steam dump valves for that shell and forces them closed", sub: true }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Ensures steam is only bypassed to condenser if adequate vacuum exists to receive it", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Dumping steam into condenser without vacuum would rapidly overpressurize it", sub: false },
              { text: "Could cause catastrophic structural failure and blow out rupture discs", sub: true },
              { text: "C-9 protects main condenser by blocking steam dumps when heat sink unavailable", sub: false }
            ]
          }
        ]
      },
      {
        id: "C-11",
        title: "Control Bank D Auto-Withdrawal Block",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Control Bank D Group 1 step counter reaches 232 \u00b1 2 steps withdrawn", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/1 step counter logic", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Blocks any further automatic withdrawal of Control Bank D", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Halts automatic withdrawal at physical upper limit (\"rods in heaven\")", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Physical limit for rod withdrawal is ~228\u2013231 steps", sub: false },
              { text: "Driving further upward causes step counters to diverge from actual rod position", sub: true },
              { text: "Prevents misalignment and protects stepping mechanisms from unnecessary wear", sub: false }
            ]
          }
        ]
      },
      {
        id: "C-16",
        title: "Turbine Loading Stop and Load Reject Hold",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Lowest auctioneered Tavg drops < 553\u00b0F OR drops 20\u00b0F below Tref (Tavg < Tref \u2212 20\u00b0F)", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "Either low temperature condition", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Stops automatic turbine loading", sub: false },
              { text: "Defeats the remote dispatching system", sub: true },
              { text: "Holds the turbine, preventing it from pulling more steam", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Prevents further automatic increases in steam demand when primary side is cooling down excessively", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Significant uncommanded Tavg drop indicates excessive steam demand (faulted SG or stuck-open valve)", sub: false },
              { text: "C-16 acts on secondary side to stop turbine from drawing more steam", sub: false },
              { text: "Prevents primary cooldown from worsening while operators address the fault", sub: true }
            ]
          }
        ]
      },
      {
        id: "C-20",
        title: "AMSAC Arming Signal",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Turbine first stage pressure (Pimp) exceeds 240 psig (~34.9% equivalent reactor power)", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/2 using AC PT-505 and AC PT-506", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Arms the AMSAC system", sub: false },
              { text: "If armed and 3/4 SGs < 12% NR (loss of heat sink), AMSAC actuates:", sub: false },
              { text: "Trips main turbine", sub: true },
              { text: "Actuates Motor-Driven and Turbine-Driven AFW Pumps (AFAS-M/AFAS-T)", sub: true },
              { text: "Isolates SG blowdown and sampling (SGBSIS)", sub: true }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Enables ATWS Mitigating System Actuation Circuitry (AMSAC) at significant power levels", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "AMSAC backs up RPS during Anticipated Transient Without Scram (ATWS)", sub: false },
              { text: "Below ~35%, sufficient margin and time for operator action \u2014 AMSAC not needed", sub: false },
              { text: "C-20 blocks spurious actuations at low power while ensuring availability at high power", sub: true }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "reactor-trips",
    name: "Reactor Trips",
    shortName: "Rx Trips",
    cards: [
      {
        id: "1",
        title: "Manual Reactor Trip",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Actuation of manual handswitches", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/2 (either handswitch on RO or BOP panels)", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "None \u2014 always active in Modes 1, 2, or when rods capable of withdrawal in Modes 3, 4, 5", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Allows operator to manually shut down reactor at any time", sub: false },
              { text: "Used when anticipating automatic trip, observing unmitigated transients, or responding to EALs", sub: true }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Two independent channels ensure no single random failure disables manual trip function", sub: false },
              { text: "Provides reliable capability to drop control rods and shut down core", sub: true }
            ]
          }
        ]
      },
      {
        id: "2",
        title: "Power Range \u2014 High Flux",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "\u2265 109% Rated Thermal Power (RTP)", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 Power Range channels; 1/4 provides alarm", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Always On \u2014 cannot be bypassed", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Trips reactor to protect core against positive reactivity excursion leading to DNB during power operations", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Primary protection against overpower transients", sub: false },
              { text: "Halts uncontrolled RCCA bank withdrawal or excessive cooldown events before fuel cladding damage", sub: true }
            ]
          }
        ]
      },
      {
        id: "3",
        title: "Power Range \u2014 Low Flux",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "\u2265 25% RTP", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 Power Range channels; 1/4 provides alarm", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Can be manually blocked \u2265 P-10 (2 train handswitches)", sub: false },
              { text: "Automatically re-enabled when 3/4 channels drop < P-10", sub: true }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Core protection against positive reactivity excursions from subcritical or low power conditions", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Redundant backup to IR trip during startup against uncontrolled rod withdrawal from zero power", sub: false },
              { text: "Above P-10, operator blocks to prevent spurious actuation; relies on High Setpoint trip", sub: true }
            ]
          }
        ]
      },
      {
        id: "4",
        title: "Power Range \u2014 High Positive Rate Flux",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "\u2265 +4% of RTP in 2 seconds", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 Power Range channels; 1/4 provides alarm", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Manually reset on NI cabinet", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Protects core from extremely rapid reactivity additions", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Primarily mitigates Rod Ejection Accident (REA)", sub: false },
              { text: "Rate trip acts faster than absolute level High Flux trip during rapid transients", sub: true },
              { text: "Limits peak power and prevents fuel damage", sub: true }
            ]
          }
        ]
      },
      {
        id: "6",
        title: "Intermediate Range \u2014 High Flux",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Current equivalent to \u2265 25% RTP", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/2 IR channels", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Manually blocked when \u2265 P-10 (via 2 train handswitches)", sub: false },
              { text: "Automatically unblocked when 3/4 PR channels drop < P-10", sub: true },
              { text: "Manual trip bypass available per channel (provides alarm)", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Core protection during reactor startup against uncontrolled reactivity excursions", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Primary protection against uncontrolled RCCA bank withdrawal from subcritical/low power", sub: false },
              { text: "Above P-10, PR High Flux protection available \u2014 IR trip can be blocked", sub: true }
            ]
          }
        ]
      },
      {
        id: "7",
        title: "Source Range \u2014 High Flux",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "\u2265 10\u2075 cps (counts per second)", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/2 SR channels", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Manually blocked when IR \u2265 P-6 (1/2 IR channels > 10\u207b\u00b9\u2070 amps)", sub: false },
              { text: "Automatically enabled when 2/2 IR channels drop < P-6", sub: true },
              { text: "Auto blocked when PR \u2265 P-10 (backup block)", sub: false },
              { text: "Manual trip bypass available per channel (provides alarm)", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Core protection against excessive reactivity additions during startup from deep subcritical", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "First line of defense during startup and in Modes 3, 4, 5 with rod withdrawal capability", sub: false },
              { text: "Protects against inadvertent reactivity transient before IR range reached", sub: true },
              { text: "At P-6, SR trip blocked and detectors de-energized to protect from high flux burnout", sub: false }
            ]
          }
        ]
      },
      {
        id: "8",
        title: "Overtemperature \u0394T",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Nominal 110% RTP \u2014 calculated continuously per loop", sub: false },
              { text: "Based on Tavg, Pressurizer Pressure, and Axial Flux Difference (\u0394I)", sub: true },
              { text: "Nominal parameters: Tavg = 586.5\u00b0F, P = 2235 psig", sub: true },
              { text: "Lead/Lag compensated (rate sensitive for Tavg changes)", sub: true }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 loops; 1/4 provides alarm", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Setpoint dynamically lowered when: Tavg > 586.5\u00b0F, P < 2235 psig, or \u0394I penalty exceeded", sub: false },
              { text: "Only \u0394T trip whose setpoint can climb > 110% (favorable conditions)", sub: false },
              { text: "Generates C-3 interlock (rod stop + turbine runback) prior to trip", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Ensures reactor does not exceed design limit DNBR (Departure from Nucleate Boiling Ratio)", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Protects core against DNB across wide range of pressure, temperature, and axial power profiles", sub: false },
              { text: "Penalty terms rapidly drop setpoint during transients (rod withdrawal, depressurization)", sub: true },
              { text: "Prevents film boiling on fuel cladding which would impair heat transfer", sub: false }
            ]
          }
        ]
      },
      {
        id: "9",
        title: "Overpower \u0394T",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Nominal 110% RTP \u2014 calculated per loop based on Tavg and rate of change of Tavg", sub: false },
              { text: "Nominal parameter: Tavg = 586.5\u00b0F", sub: true },
              { text: "\u0394I not used (penalty = 0); Pressure not used", sub: true }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 loops; 1/4 provides alarm", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Setpoint lowered when Tavg > 586.5\u00b0F or during fast Tavg increase (rate penalty)", sub: false },
              { text: "Unlike OT\u0394T, setpoint cannot be increased above nominal 110%", sub: false },
              { text: "Generates C-4 interlock (rod stop + turbine runback) prior to trip", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Protects fuel integrity by ensuring maximum kW/ft limits (linear heat generation rate) not exceeded", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Physically prevents fuel centerline melting", sub: false },
              { text: "Protects against overpower transients (uncontrolled RCCA bank withdrawal)", sub: true },
              { text: "Credited to mitigate small steamline break and SLB with coincident rod withdrawal", sub: false }
            ]
          }
        ]
      },
      {
        id: "10",
        title: "Pressurizer Pressure \u2014 Low",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "\u2264 1940 psig (Lead/lag compensated, rate sensitive)", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 channels; 1/4 provides alarm", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Automatically blocked when power < P-7 (~10%)", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Core protection against DNB caused by depressurization event", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Decreased primary pressure drastically narrows DNB margin", sub: false },
              { text: "Protects during events like stuck-open PRZR spray valve, relief valve, or small LOCA", sub: true },
              { text: "Blocked below P-7: insufficient heat at low power for DNB even at low pressures", sub: false }
            ]
          }
        ]
      },
      {
        id: "11",
        title: "Pressurizer Pressure \u2014 High",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "\u2265 2385 psig", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 channels; 1/4 provides alarm", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Always active \u2014 cannot be bypassed", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Protects RCS pressure boundary from overpressurization", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Ensures RCS does not exceed 110% of design pressure (2735 psig)", sub: false },
              { text: "Protects during events that decrease heat removal (Loss of External Load, Turbine Trip without steam dumps)", sub: true }
            ]
          }
        ]
      },
      {
        id: "12",
        title: "Pressurizer Water Level \u2014 High",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "\u2265 92%", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/3 channels; 1/3 provides alarm", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Automatically blocked when power < P-7", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Protects pressurizer safety valves and serves as backup to High Pressure trip", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Safety valves designed to pass steam \u2014 passing water causes mechanical damage or failure to reseat", sub: false },
              { text: "Water-solid condition creates effective small-break LOCA on pressurizer roof", sub: true },
              { text: "Trip at 92% arrests volumetric expansion, maintains steam bubble", sub: false },
              { text: "Blocked below P-7: transients at low power are slow enough for operator action", sub: true }
            ]
          }
        ]
      },
      {
        id: "13",
        title: "RCS Flow \u2014 Low",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "\u2264 89.9% of loop design flow", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "Single Loop: 2/3 detectors on any 1/4 loops (trip if > P-8; auto block < P-8)", sub: false },
              { text: "Multi-loop: 2/3 detectors on any 2/4 loops (trip if > P-7; auto block < P-7)", sub: false },
              { text: "1/3 on 1/4 loops provides alarm", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Single-loop trip blocked < P-8 (48%)", sub: false },
              { text: "Multi-loop trip blocked < P-7 (10%)", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Arrests loss of primary flow event and protects core DNB margins", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Reduced RCS flow challenges DNBR limit by reducing heat removal from fuel cladding", sub: false },
              { text: "Below P-7: natural circulation/thermal margin sufficient", sub: true },
              { text: "Between P-7 and P-8: single RCP loss tolerable, but two RCPs require trip", sub: true },
              { text: "Above P-8: even single RCP loss requires immediate trip for DNBR protection", sub: true }
            ]
          }
        ]
      },
      {
        id: "14",
        title: "SG Water Level \u2014 Low Low",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "\u2264 23.5% of Narrow Range", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 channels on 1/4 Steam Generators; 1/4 on 1/4 S/Gs provides alarm", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Always active", sub: false },
              { text: "Trip signal also automatically actuates AFW pumps (AFAS-M / AFAS-T)", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Protects against loss of secondary heat sink", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "SGs are primary ultimate heat sink \u2014 minimum water inventory needed for decay heat removal", sub: false },
              { text: "Low-low level indicates feedwater cannot keep pace with boiling (impending loss of heat sink)", sub: true },
              { text: "Trip inserts negative reactivity; AFW actuation occurs before U-tubes uncover", sub: false }
            ]
          }
        ]
      },
      {
        id: "15",
        title: "RCP Undervoltage",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "\u2264 10,578 Vac", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/2 on PA01 & PA02", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Automatically blocked when power < P-7", sub: false },
              { text: "Time delay relay prevents spurious trips from transient voltage perturbations", sub: true }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Trips reactor in anticipation of multi-loop loss of flow", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Anticipatory trip \u2014 senses loss of driving voltage before flow actually drops", sub: false },
              { text: "Generates reactor trip before Flow-Low setpoint is reached", sub: true },
              { text: "Blocked below P-7: core not producing sufficient power for DNB at this flow rate", sub: false }
            ]
          }
        ]
      },
      {
        id: "16",
        title: "RCP Underfrequency",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "\u2264 57.15 Hz", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/2 on PA01 & PA02", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Automatically blocked when power < P-7", sub: false },
              { text: "Time delay relay prevents spurious trips from transient frequency perturbations", sub: true },
              { text: "Opens All 4 RCP breakers to ensure Flywheel Coastdown to prevent DNB", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Trips reactor in anticipation of multi-loop loss of flow due to grid instability", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Grid frequency disturbance causes RCPs to slow synchronously, reducing RCS flow", sub: false },
              { text: "Anticipatory trip acts before Flow-Low setpoint reached", sub: true },
              { text: "Blocked below P-7: DNB not a concern at low power levels", sub: false }
            ]
          }
        ]
      },
      {
        id: "17",
        title: "Turbine Trip \u2014 Low EHC Oil Pressure",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "<590 psig EHC press", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/3 pressure switches", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Automatically blocked when power < P-9 (~50% RTP)", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Trips reactor upon a turbine trip at power", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Turbine trip causes sudden loss of secondary heat removal", sub: false },
              { text: "Reactor trip minimizes RCS pressure/temperature transient", sub: true },
              { text: "Below P-9: primary system with steam dumps can ride out turbine trip without scram", sub: false }
            ]
          }
        ]
      },
      {
        id: "18",
        title: "Turbine Trip \u2014 Stop Valve Closure",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "<99% Open on Stop Valves", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "4/4 Stop Valves closed", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Automatically blocked when power < P-9", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Trips reactor simultaneously with turbine trip on stop valve closure", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Anticipatory scram minimizes RCS transient from loss of secondary heat removal", sub: false },
              { text: "Unit designed to withstand loss of load (Pressurizer Pressure-High trip provides backup)", sub: true },
              { text: "Below P-9: steam dumps can accept full load rejection safely", sub: false }
            ]
          }
        ]
      },
      {
        id: "19",
        title: "Safety Injection Actuation",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Any automatic or manual Safety Injection (SI) signal", sub: false },
              { text: "<1830 psig (2/3) PZR", sub: true },
              { text: ">3.5 psig Containment", sub: true },
              { text: "<615 psig Steam Line", sub: true }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/2 Trains", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Always active in Modes 1 and 2", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Ensures reactor scrams if SI occurs without a primary protection trip already having occurred", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Safety analysis requires reactor tripped and rods inserted before/concurrent with SI flow reaching core", sub: false },
              { text: "Direct ESFAS input ensures trip regardless of what caused the SI", sub: true },
              { text: "Condition of acceptability for LOCA analysis", sub: false }
            ]
          }
        ]
      },
      {
        id: "20",
        title: "General Warning",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "SSPS Cabinet General Warning condition", sub: false },
              { text: "Multiplexer switch in inhibit, Input Error Inhibit switch out of normal, loss of 48V or 15V supply, or improperly inserted circuit cards", sub: true }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/2 (General Warning on SSPS Train A AND Train B)", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "None", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Fail-safe: scrams reactor if protective capability of both SSPS trains is compromised or blinded", sub: false }
            ]
          }
        ]
      }
    ]
  },
  {
    id: "turbine-trips",
    name: "Turbine Trips",
    shortName: "Turb Trips",
    cards: [
      {
        id: "1",
        title: "Emergency Trip Pushbutton in Control Room",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Actuation of manual handswitch/pushbutton", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/1 (depressing pushbutton on main control board)", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "None \u2014 always active", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Allows operator to manually trip main turbine at any time", sub: false },
              { text: "Used to mitigate abnormal transients or anticipate automatic trips", sub: true }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Provides manual turbine trip capability from control room", sub: false },
              { text: "Mitigates abnormal secondary transients, stops steam draw, prevents turbine/generator damage", sub: true },
              { text: "Used when automatic trips fail or preemptive action required by EOPs", sub: false }
            ]
          }
        ]
      },
      {
        id: "2",
        title: "Moisture Separator High Level",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "High level in MSR drain tanks", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "Typically 2/3 level switches on any individual MSR", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "None", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Trips main turbine to prevent water induction into LP turbines", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "MSRs remove moisture from steam between HP and LP turbines", sub: false },
              { text: "Overfilled MSR drain tanks allow water carryover into LP turbines", sub: true },
              { text: "Water droplets act as projectiles against high-speed blades \u2014 catastrophic mechanical damage", sub: false }
            ]
          }
        ]
      },
      {
        id: "3",
        title: "Low Condenser Vacuum",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Typically < ~20\" Hg vacuum (plant-specific calibration)", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/3 or 2/4 pressure switches detecting low vacuum", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Turbine trip on low vacuum also blocks condenser steam dumps (C-9)", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Protects condenser from overpressurization and LP turbine blades from windage overheating", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Loss of condenser vacuum = loss of secondary ultimate heat sink", sub: false },
              { text: "Continued steam exhaust into vacuum-less condenser causes catastrophic failure (rupture discs blow)", sub: true },
              { text: "Low vacuum causes severe frictional heating (windage) on last stage LP blades", sub: false }
            ]
          }
        ]
      },
      {
        id: "4",
        title: "Low Lube Oil Pressure",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Decreasing bearing header lube oil pressure to trip setpoint", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "Typically 2/3 sensors", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Accompanied by auto-starts of Turning Gear Oil Pump and Emergency Bearing Oil Pump", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Protects turbine-generator bearings and shaft journal from severe mechanical destruction", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Rotor weight entirely supported by hydrodynamic oil film in journal bearings", sub: false },
              { text: "Loss of oil pressure collapses film \u2014 metal-to-metal contact at high speed", sub: true },
              { text: "Causes friction fires, bearing wipedown, and destruction of turbine journal", sub: true },
              { text: "Trip allows rotor to coast down before complete bearing failure", sub: false }
            ]
          }
        ]
      },
      {
        id: "5",
        title: "Reactor Trip",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Opening of both Reactor Trip Breakers", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/2 RTBs open (generates P-4 permissive)", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Driven by P-4 (Reactor Trip) interlock", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Stops secondary system from drawing steam when reactor is no longer producing power", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Prevents excessive primary side cooldown after reactor trip", sub: false },
              { text: "Continued turbine steam draw would rapidly depressurize SGs and overcool RCS", sub: true },
              { text: "Uncontrolled primary depressurization challenges thermal limits", sub: true }
            ]
          }
        ]
      },
      {
        id: "6",
        title: "Thrust Bearing Wear",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Excessive axial displacement of turbine rotor", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 channels (typically two probes per side)", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "None", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Prevents axial rubbing and catastrophic internal damage to turbine blading and diaphragms", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Thrust bearing absorbs massive axial forces and keeps rotor precisely aligned", sub: false },
              { text: "If bearing fails, rotor shifts axially", sub: true },
              { text: "Extremely tight clearances between rotating blades and stationary nozzles", sub: true },
              { text: "Axial shift causes high-speed metal-to-metal grinding, destroying turbine internals", sub: false }
            ]
          }
        ]
      },
      {
        id: "7",
        title: "Overspeed (Electrical and Mechanical)",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Electrical: ~103\u2013104% of rated speed (via EHC)", sub: false },
              { text: "Mechanical: ~110\u2013111% of rated speed (1800 rpm nominal \u2192 ~1980 rpm)", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "Electrical: dedicated overspeed protection controller", sub: false },
              { text: "Mechanical: physical spring-loaded eccentric ring/bolt on shaft", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Actuates Auto Stop Oil dump valve", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Prevents turbine-generator rotor from flying apart due to extreme centrifugal forces", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Load rejection instantly removes electrical resistance \u2014 turbine accelerates uncontrollably", sub: false },
              { text: "Centrifugal forces increase with square of speed", sub: true },
              { text: "Extreme overspeed causes blades/rotor to yield and disintegrate (missile generation hazard)", sub: false }
            ]
          }
        ]
      },
      {
        id: "8",
        title: "Manual Trip Handle on Front Standard",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Physical actuation of the handle", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "1/1", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Mechanically dumps Auto Stop Oil / EHC fluid", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Provides direct, mechanical, localized means to trip the turbine", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Defense-in-depth: backup if control room electrical trip pushbuttons fail", sub: false },
              { text: "Used locally for catastrophic events at turbine deck (severe vibration, oil fire)", sub: true },
              { text: "Physical mechanical override that directly dumps hydraulic fluid", sub: false }
            ]
          }
        ]
      },
      {
        id: "9",
        title: "Stator Cooling Water System Trouble",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Low stator cooling water flow, low pressure, or high outlet temperature", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "Typically 2/3 sensors or prolonged time-delay actuation", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Often initiates turbine runback prior to outright trip to stabilize temperatures", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Protects main generator from severe thermal degradation and winding insulation failure", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Massive I\u00b2R losses in copper stator windings generate extreme heat", sub: false },
              { text: "Hollow windings cooled internally by highly purified deionized water", sub: true },
              { text: "Loss of cooling melts insulation in seconds to minutes", sub: true },
              { text: "Leads to catastrophic phase-to-phase or phase-to-ground fault", sub: false }
            ]
          }
        ]
      },
      {
        id: "10",
        title: "Low Hydraulic Fluid Pressure (EHC)",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Low pressure in EHC fluid system", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "Typically 2/3 or 2/4 pressure switches", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Causes all EHC-operated valves (Stop, Control, Intercept, Reheat Stop) to slam shut", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Inherent fail-safe: turbine trips when valve control capability is lost", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Turbine steam valves held open by high-pressure EHC fluid, fail-closed via strong springs", sub: false },
              { text: "Massive EHC leak or pump failure causes loss of fluid pressure", sub: true },
              { text: "Ensures inability to control valves results in turbine shutdown, not failed-open condition", sub: false }
            ]
          }
        ]
      },
      {
        id: "11",
        title: "Any Generator Trip",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Actuation of Generator primary/backup lockout relays (e.g., 86G)", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "N/A (based on primary electrical faults: differential, ground, or volts/hertz)", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Generator trip opens output breakers and trips turbine", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Prevents excessive mechanical overspeed following generator lockout", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Generator trip instantly removes entire electrical load (mechanical resistance)", sub: false },
              { text: "Continued steam admission causes uncontrolled turbine acceleration", sub: true },
              { text: "Unopposed driving torque leads to catastrophic rotor destruction", sub: false }
            ]
          }
        ]
      },
      {
        id: "12",
        title: "Loss of EHC Electrical Power",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "Loss of redundant electrical power feeds to EHC control cabinets", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "N/A", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "De-energizes Master Trip Solenoids", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Ensures turbine fails to safe (tripped) condition on complete loss of control capability", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Master Trip Solenoids are energize-to-close (hold EHC fluid pressure)", sub: false },
              { text: "Loss of power de-energizes solenoids \u2014 dumps EHC fluid to drain", sub: true },
              { text: "All stop and control valves slam shut (fail-safe feature)", sub: false },
              { text: "If control system loses power, it cannot respond to speed/load changes \u2014 turbine must be secured", sub: true }
            ]
          }
        ]
      },
      {
        id: "13",
        title: "Excessive Vibration",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "High vibration amplitudes (mils) on turbine/generator bearings", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "High vibration on adjacent bearings or elevated single bearing reading with time delay", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "None", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Protects turbine shaft, casing, and bearings from destructive forces", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "Caused by blade loss, shaft bowing, bearing failure, or water induction", sub: false },
              { text: "At 1800 RPM, unbalanced rotor generates immense destructive dynamic forces", sub: true },
              { text: "Can rip turbine off foundation and destroy auxiliary equipment", sub: true },
              { text: "Trip removes motive steam force, allows rotor to coast down", sub: false }
            ]
          }
        ]
      },
      {
        id: "14",
        title: "AMSAC",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "AMSAC actuation: 3/4 Steam Generators < 12% narrow range", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "3/4 SGs low-low level", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Armed by C-20 interlock (turbine power > ~35%)", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Trips turbine when RPS has failed to trip during loss of secondary heat sink (ATWS scenario)", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "During ATWS, normal RPS fails to trip reactor when needed", sub: false },
              { text: "AMSAC removes steam demand (turbine trip) and actuates AFW to preserve SG inventory", sub: true },
              { text: "Hard-wired actuation stabilizes secondary side while operators manually scram", sub: false }
            ]
          }
        ]
      },
      {
        id: "15",
        title: "SG Water Level \u2014 High High",
        sections: [
          {
            label: "Setpoint",
            color: "amber",
            items: [
              { text: "\u2264 78% of Narrow Range (on any single SG)", sub: false }
            ]
          },
          {
            label: "Coincidence",
            color: "red",
            items: [
              { text: "2/4 level channels on any one Steam Generator", sub: false }
            ]
          },
          {
            label: "Interlocks",
            color: "green",
            items: [
              { text: "Simultaneously initiates Feedwater Isolation (P-14)", sub: false },
              { text: "If reactor power > P-9 (50%), turbine trip generates direct reactor trip", sub: false }
            ]
          },
          {
            label: "Purpose",
            color: "blue",
            items: [
              { text: "Physically halts moisture carryover into main turbine", sub: false }
            ]
          },
          {
            label: "Design Basis",
            color: "purple",
            items: [
              { text: "SG overfill from feedwater malfunction allows water into main steam lines", sub: false },
              { text: "Water induction into high-speed HP turbine causes phenomenal mechanical damage", sub: true },
              { text: "Tripping turbine arrests transient immediately, protecting capital equipment", sub: false }
            ]
          }
        ]
      }
    ]
  },
  {
    "id": "rcp-setpoints",
    "name": "Rcp Setpoints",
    "shortName": "RCP",
    "cards": [
        {
            "id": "RCP-1",
            "title": "No. 1 Seal and Bearing Water Temperature",
            "sections": [
                {
                    "label": "Setpoint",
                    "color": "amber",
                    "items": [
                        {
                            "text": "> 230°F",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        {
                            "text": "Protects No. 1 seal and bearing from thermal damage due to high water temperature",
                            "sub": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "RCP-2",
            "title": "RCP Motor Bearing Temperature",
            "sections": [
                {
                    "label": "Setpoint",
                    "color": "amber",
                    "items": [
                        {
                            "text": "> 195°F",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        {
                            "text": "Protects RCP motor bearings from overheating and potential failure",
                            "sub": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "RCP-3",
            "title": "RCP Motor Stator Winding Temperature",
            "sections": [
                {
                    "label": "Setpoint",
                    "color": "amber",
                    "items": [
                        {
                            "text": "> 299°F",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        {
                            "text": "Protects motor stator windings from thermal degradation of insulation",
                            "sub": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "RCP-4",
            "title": "Frame Vibration",
            "sections": [
                {
                    "label": "Setpoint",
                    "color": "amber",
                    "items": [
                        {
                            "text": "> 5 mils",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        {
                            "text": "Detects abnormal pump frame vibration indicating mechanical degradation",
                            "sub": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "RCP-5",
            "title": "Shaft Vibration",
            "sections": [
                {
                    "label": "Setpoint",
                    "color": "amber",
                    "items": [
                        {
                            "text": "> 20 mils",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        {
                            "text": "Detects abnormal shaft vibration indicating potential seal or bearing damage",
                            "sub": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "RCP-6",
            "title": "No. 1 Seal Leakoff",
            "sections": [
                {
                    "label": "Setpoint",
                    "color": "amber",
                    "items": [
                        {
                            "text": "< 0.8 gpm",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        {
                            "text": "Indicates No. 1 seal degradation when leakoff flow drops below normal range",
                            "sub": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "RCP-7",
            "title": "No. 1 Seal dP",
            "sections": [
                {
                    "label": "Setpoint",
                    "color": "amber",
                    "items": [
                        {
                            "text": "< 200 psid",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        {
                            "text": "Indicates loss of differential pressure across No. 1 seal suggesting seal failure",
                            "sub": false
                        }
                    ]
                }
            ]
        }
    ]
},
  {
    "id": "tech-spec-modes",
    "name": "Tech Spec Modes",
    "shortName": "Modes",
    "cards": [
        {
            "id": "MODE-1",
            "title": "Power Operation",
            "sections": [
                {
                    "label": "Setpoint",
                    "color": "amber",
                    "items": [
                        {
                            "text": "Keff ≥ 0.99",
                            "sub": false
                        },
                        {
                            "text": "% RTP > 5% (excluding decay heat)",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        {
                            "text": "Normal at-power operations above 5% reactor thermal power",
                            "sub": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "MODE-2",
            "title": "Startup",
            "sections": [
                {
                    "label": "Setpoint",
                    "color": "amber",
                    "items": [
                        {
                            "text": "Keff ≥ 0.99",
                            "sub": false
                        },
                        {
                            "text": "% RTP ≤ 5% (excluding decay heat)",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        {
                            "text": "Reactor is critical or approaching criticality but below 5% power",
                            "sub": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "MODE-3",
            "title": "Hot Standby",
            "sections": [
                {
                    "label": "Setpoint",
                    "color": "amber",
                    "items": [
                        {
                            "text": "Keff < 0.99",
                            "sub": false
                        },
                        {
                            "text": "Tave ≥ 350°F",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        {
                            "text": "Reactor subcritical with RCS at or above normal operating temperature",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Design Basis",
                    "color": "purple",
                    "items": [
                        {
                            "text": "All vessel head closure bolts fully tensioned",
                            "sub": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "MODE-4",
            "title": "Hot Shutdown",
            "sections": [
                {
                    "label": "Setpoint",
                    "color": "amber",
                    "items": [
                        {
                            "text": "Keff < 0.99",
                            "sub": false
                        },
                        {
                            "text": "200°F < Tave < 350°F",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        {
                            "text": "Reactor subcritical with RCS temperature between 200°F and 350°F",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Design Basis",
                    "color": "purple",
                    "items": [
                        {
                            "text": "All vessel head closure bolts fully tensioned",
                            "sub": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "MODE-5",
            "title": "Cold Shutdown",
            "sections": [
                {
                    "label": "Setpoint",
                    "color": "amber",
                    "items": [
                        {
                            "text": "Keff < 0.99",
                            "sub": false
                        },
                        {
                            "text": "Tave ≤ 200°F",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        {
                            "text": "Reactor subcritical with RCS temperature at or below 200°F",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Design Basis",
                    "color": "purple",
                    "items": [
                        {
                            "text": "All vessel head closure bolts fully tensioned",
                            "sub": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "MODE-6",
            "title": "Refueling",
            "sections": [
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        {
                            "text": "One or more vessel head closure bolts not fully tensioned",
                            "sub": false
                        }
                    ]
                },
                {
                    "label": "Design Basis",
                    "color": "purple",
                    "items": [
                        {
                            "text": "One or more vessel head closure bolts not fully tensioned",
                            "sub": false
                        },
                        {
                            "text": "Distinguished from Cold Shutdown by bolt tension status",
                            "sub": false
                        }
                    ]
                }
            ]
        },
        {
            "id": "MODE-D",
            "title": "Defueled",
            "sections": [
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        {
                            "text": "All fuel assemblies removed from the reactor vessel",
                            "sub": false
                        }
                    ]
                }
            ]
        }
    ]
},
{
    "id": "otdt-vs-opdt",
    "name": "OTdT vs OPdT",
    "shortName": "OTdT/OPdT",
    "cards": [
        {
            "id": "Overtemperature \u0394T (OT\u0394T)",
            "title": "",
            "sections": [
                {
                    "label": "Setpoint",
                    "color": "amber",
                    "items": [
                        { "text": "+/\u2212 110%", "sub": false }
                    ]
                },
                {
                    "label": "Coincidence",
                    "color": "red",
                    "items": [
                        { "text": "2/4 loops \u2014 trip if actual \u0394T \u2265 OTdTSP", "sub": false },
                        { "text": "Rod stop & turbine runback at OTdTSP \u2212 3%", "sub": true }
                    ]
                },
                {
                    "label": "Interlocks",
                    "color": "green",
                    "items": [
                        { "text": "Applicable in Modes 1 and 2", "sub": false }
                    ]
                },
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        { "text": "Protects DNBR limit \u2014 prevents departure from nucleate boiling during slow transients (Function 6)", "sub": false },
                        { "text": "Inputs: Loop \u0394T, Tavg (lead/lag compensated via \u03c4\u2081\u2013\u03c4\u2086), pressurizer pressure K3(P\u2212P\u2032), axial flux penalty f\u2081(\u0394I)", "sub": true },
                        { "text": "KEY: OT\u0394T is the ONLY function that uses pressurizer pressure (DNBR is pressure-dependent)", "sub": true },
                        { "text": "Lead/lag on Tavg compensates for piping transport delay from core to RTDs", "sub": true }
                    ]
                },
                {
                    "label": "Design Basis",
                    "color": "purple",
                    "items": [
                        { "text": "Thot: 3 RTDs/loop averaged (530\u2013650\u00b0F), Tcold: 1 RTD/loop (510\u2013630\u00b0F)", "sub": false },
                        { "text": "Pressurizer: BB PT-455/456/457/458 (1700\u20132500 psig)", "sub": false },
                        { "text": "NIS: N-41 thru N-44 (top + bottom detectors, 0\u2013120% RTP)", "sub": false },
                        { "text": "MCB three-pen recorder shows OTdTSP, OPdTSP, and actual \u0394T", "sub": false }
                    ]
                }
            ]
        },
        {
            "id": "Overpower \u0394T (OP\u0394T)",
            "title": "",
            "sections": [
                {
                    "label": "Setpoint",
                    "color": "amber",
                    "items": [
                        { "text": "\u2212 110%", "sub": false }
                    ]
                },
                {
                    "label": "Coincidence",
                    "color": "red",
                    "items": [
                        { "text": "2/4 loops \u2014 trip if actual \u0394T \u2265 OPdTSP", "sub": false },
                        { "text": "Rod stop & turbine runback at OPdTSP \u2212 3%", "sub": true }
                    ]
                },
                {
                    "label": "Interlocks",
                    "color": "green",
                    "items": [
                        { "text": "Applicable in Modes 1 and 2", "sub": false }
                    ]
                },
                {
                    "label": "Purpose",
                    "color": "blue",
                    "items": [
                        { "text": "Protects fuel integrity \u2014 prevents pellet melting and <1% cladding strain (kW/ft limit, Function 7)", "sub": false },
                        { "text": "Inputs: Loop \u0394T, explicit rate term K5(dT/dt), K6(T\u2212T\u2033), axial flux penalty f\u2082(\u0394I)", "sub": true },
                        { "text": "KEY: OP\u0394T does NOT use pressurizer pressure (fuel overpower limits are not pressure-dependent)", "sub": true },
                        { "text": "K5 has two values (increasing vs decreasing Tavg); K6 has two values (T>T\u2033 vs T\u2264T\u2033)", "sub": true },
                        { "text": "Uses explicit dT/dt instead of lead/lag compensation", "sub": true }
                    ]
                },
                {
                    "label": "Design Basis",
                    "color": "purple",
                    "items": [
                        { "text": "Same RTD inputs as OT\u0394T \u2014 NO pressurizer pressure input", "sub": false },
                        { "text": "NIS N-41 thru N-44 for f\u2082(\u0394I) with separate COLR values from f\u2081", "sub": false },
                        { "text": "Ovation: Tavg uses 2nd lowest of 4 ch; \u0394T uses 2nd highest of 4 ch", "sub": false }
                    ]
                }
            ]
        }
    ]
}
]
