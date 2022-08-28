'reach 0.1';
/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */

    export const main = Reach.App(()=>{
        setOptions({
            connectors: [ETH],
        })
        const A = Participant('Alice', {
            request: UInt,
            info: UInt
        })
        const B = Participant('Bob',{
            want: Fun([UInt], Null),
            got: Fun([UInt], Null)
        })
        init();

        A.only(()=>{
            const request = declassify(interact.request);
        })
        A.publish(request);
        commit();

        B.only(() => {
            interact.want(request);
        });
        B.pay(request);
        commit();

        A.only(() => {
            const info = declassify(interact.info);
        });
        A.publish(info);
        transfer(request).to(A);
        commit();
    
        B.only(() => {
          interact.got(info);
        });
        exit();
    })
