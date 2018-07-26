```mermaid
graph TB


WPsendCallState-.->|send translib message|WPPRSsendAutoXML
WPconstructDialog-.->|xml|prs


subgraph SRVprs
B2BUAProcEvent(B2BUAProcEvent)-->|invoke callback|SRVprs_entry

SRVprs_entry{SRVprs_entry} -->|IN_ORIG|SRVprs_in_orig(SRVprs_in_orig)
SRVprs_entry -->|IN_TERM|SRVprs_in_term(SRVprs_in_term)
SRVprs_entry -->|OUT_ORIG|SRVprs_out_orig(SRVprs_out_orig)
SRVprs_entry -->|OUT_TERM|SRVprs_out_term(SRVprs_out_term)

SRVprs_in_orig -->SRVprs_check_trigger(SRVprs_check_trigger)
SRVprs_in_orig -->stub

SRVprs_in_term-->SRVprs_check_trigger(SRVprs_check_trigger)
SRVprs_in_term-->stub

SRVprs_out_orig-->SRVprs_check_trigger(SRVprs_check_trigger)
SRVprs_out_orig-->stub

SRVprs_out_term-->SRVprs_check_trigger(SRVprs_check_trigger)
SRVprs_out_term-->stub{switch}
style stub fill:#ccf,stroke:#f66,stroke-width:2px,stroke-dasharray: 5, 5

SRVprs_check_trigger-->SRVprs_check_if_armed(SRVprs_check_if_armed)
SRVprs_check_if_armed-.->|SRVPRS_TRIG_ENCOUNTERED|stub

stub-->|case SRVPRS_TRIG_ENCOUNTERED |SRVprs_prep_and_send_request

SRVprs_prep_and_send_request-->|IN_TERM or OUT_TERM |WPPRS_SEND_TERM_TRIGGER(WPPRS_SEND_TERM_TRIGGER)

SRVprs_prep_and_send_request-->|else |WPPRS_SEND_ORIG_TRIGGER(WPPRS_SEND_ORIG_TRIGGER)

WPPRS_SEND_ORIG_TRIGGER-->WPsendCallState(WPsendCallState)
WPPRS_SEND_TERM_TRIGGER-->WPsendCallState


end


subgraph prepare service date
sIPCallMgrPostMessage -.->|invoke callback|TAS_noDialog
TAS_noDialog-.->|invoke callback|TAS_NoCall 

TAS_NoCall -->TASdb_readreq(TASdb_readreq)

TASdb_readreq(TASdb_readreq)-.->|initiates DB read for subscriber|TASproc_spr

TASproc_spr(TASproc_spr) -->|the buildup of new call and dialog structures|B2BUAInit_new_call(B2BUAInit_new_call)

B2BUAInit_new_call --> |Initialize call_data.service_data after DB response|B2BUAinitServiceData(B2BUAinitServiceData)

end


subgraph WP_main

WPPRSsendAutoXML -->WPconstructDialog(WPconstructDialog)

end
subgraph PRS
prs
end
```