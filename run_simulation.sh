#!/bin/sh

echo "#;N_P;EB_P_OA_100;EB_P_OA_200;EB_P_OA_300;EB_P_OA_400;EB_P100;EB_P200;EB_P300;EB_P400;IB_P_OA100;IB_P_OA200;IB_P_OA300;IB_P_OA400;IB_P100;IB_P200;IB_P300;IB_P400;IB_PL_OA100;IB_PL_OA200;IB_PL_OA300;IB_PL_OA400;IB_PL100;IB_PL200;IB_PL300;IB_PL400;IB_PL_OA_U100;IB_PL_OA_U200;IB_PL_OA_U300;IB_PL_OA_U400;IB_PL_U100;IB_PL_U200;IB_PL_U300;IB_PL_U400"
for N in {4000..10000..100}
do
    node simulation.js $N "we dont whatn debug output"
    rm -rf /tmp/tmp-*

done