// Automatically generated with Reach 0.1.11 (f33abc3d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (f33abc3d)';
export const _backendVersion = 23;

export function getExports(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getEvents(s) {
  const stdlib = s.reachStdlib;
  return {
    };
  };
export function _getViews(s, viewlib) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Address;
  
  return {
    infos: {
      },
    views: {
      1: [ctc0],
      4: [ctc0],
      5: [ctc0]
      }
    };
  
  };
export function _getMaps(s) {
  const stdlib = s.reachStdlib;
  const ctc0 = stdlib.T_Tuple([]);
  return {
    mapDataTy: ctc0
    };
  };
export async function Alice(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Alice expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Alice expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '140'));
  const ctc4 = stdlib.T_UInt;
  const ctc5 = stdlib.T_Null;
  
  
  const v94 = ctc.selfAddress();
  const v96 = stdlib.protect(ctc0, await interact.createStream(), {
    at: './index.rsh:37:60:application',
    fs: ['at ./index.rsh:35:13:application call to [unknown function] (defined at: ./index.rsh:35:17:function exp)'],
    msg: 'createStream',
    who: 'Alice'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v96, v94],
    evt_cnt: 2,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:41:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0, ctc1],
    pay: [stdlib.checkedBigNumberify('./index.rsh:41:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v98, v99], secs: v101, time: v100, didSend: v29, from: v97 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0, ctc1],
    waitIfNotPresent: false
    }));
  const {data: [v98, v99], secs: v101, time: v100, didSend: v29, from: v97 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 1,
    out_tys: [ctc2],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v106], secs: v108, time: v107, didSend: v38, from: v105 } = txn2;
  ;
  let v109 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
  let v110 = v107;
  
  while (await (async () => {
    const v120 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    
    return v120;})()) {
    const v123 = stdlib.protect(ctc3, await interact.post(), {
      at: './index.rsh:61:51:application',
      fs: ['at ./index.rsh:59:15:application call to [unknown function] (defined at: ./index.rsh:59:19:function exp)'],
      msg: 'post',
      who: 'Alice'
      });
    
    const txn3 = await (ctc.sendrecv({
      args: [v97, v123],
      evt_cnt: 1,
      funcNum: 3,
      lct: v110,
      onlyIf: true,
      out_tys: [ctc3],
      pay: [stdlib.checkedBigNumberify('./index.rsh:65:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn3) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v125], secs: v127, time: v126, didSend: v54, from: v124 } = txn3;
        
        ;
        sim_r.isHalt = false;
        
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc3],
      waitIfNotPresent: false
      }));
    const {data: [v125], secs: v127, time: v126, didSend: v54, from: v124 } = txn3;
    ;
    const v128 = stdlib.addressEq(v97, v124);
    stdlib.assert(v128, {
      at: './index.rsh:65:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const v133 = stdlib.protect(ctc4, await interact.continueStream(), {
      at: './index.rsh:75:61:application',
      fs: ['at ./index.rsh:73:15:application call to [unknown function] (defined at: ./index.rsh:73:19:function exp)'],
      msg: 'continueStream',
      who: 'Alice'
      });
    
    const txn4 = await (ctc.sendrecv({
      args: [v97, v133],
      evt_cnt: 1,
      funcNum: 4,
      lct: v126,
      onlyIf: true,
      out_tys: [ctc4],
      pay: [stdlib.checkedBigNumberify('./index.rsh:78:11:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn4) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [v135], secs: v137, time: v136, didSend: v67, from: v134 } = txn4;
        
        ;
        const cv109 = v135;
        const cv110 = v136;
        
        await (async () => {
          const v109 = cv109;
          const v110 = cv110;
          
          if (await (async () => {
            const v120 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
            
            return v120;})()) {
            sim_r.isHalt = false;
            }
          else {
            sim_r.txns.push({
              kind: 'halt',
              tok: undefined /* Nothing */
              })
            sim_r.isHalt = true;
            }})();
        return sim_r;
        }),
      soloSend: true,
      timeoutAt: undefined /* mto */,
      tys: [ctc1, ctc4],
      waitIfNotPresent: false
      }));
    const {data: [v135], secs: v137, time: v136, didSend: v67, from: v134 } = txn4;
    ;
    const v138 = stdlib.addressEq(v97, v134);
    stdlib.assert(v138, {
      at: './index.rsh:78:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Alice'
      });
    const cv109 = v135;
    const cv110 = v136;
    
    v109 = cv109;
    v110 = cv110;
    
    continue;
    
    
    
    }
  stdlib.protect(ctc5, await interact.endStream(), {
    at: './index.rsh:85:45:application',
    fs: ['at ./index.rsh:85:11:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
    msg: 'endStream',
    who: 'Alice'
    });
  
  return;
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '30'));
  const ctc1 = stdlib.T_Address;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '140'));
  const ctc4 = stdlib.T_Null;
  const ctc5 = stdlib.T_UInt;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 2,
    funcNum: 0,
    out_tys: [ctc0, ctc1],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v98, v99], secs: v101, time: v100, didSend: v29, from: v97 } = txn1;
  ;
  const v104 = stdlib.protect(ctc2, await interact.seeStream(v98), {
    at: './index.rsh:46:56:application',
    fs: ['at ./index.rsh:44:13:application call to [unknown function] (defined at: ./index.rsh:44:17:function exp)'],
    msg: 'seeStream',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v97, v104],
    evt_cnt: 1,
    funcNum: 1,
    lct: v100,
    onlyIf: true,
    out_tys: [ctc2],
    pay: [stdlib.checkedBigNumberify('./index.rsh:48:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v106], secs: v108, time: v107, didSend: v38, from: v105 } = txn2;
      
      ;
      const v109 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
      const v110 = v107;
      
      if (await (async () => {
        const v120 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
        
        return v120;})()) {
        sim_r.isHalt = false;
        }
      else {
        sim_r.txns.push({
          kind: 'halt',
          tok: undefined /* Nothing */
          })
        sim_r.isHalt = true;
        }
      return sim_r;
      }),
    soloSend: false,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc2],
    waitIfNotPresent: false
    }));
  const {data: [v106], secs: v108, time: v107, didSend: v38, from: v105 } = txn2;
  ;
  let v109 = stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0');
  let v110 = v107;
  
  while (await (async () => {
    const v120 = stdlib.eq(v109, stdlib.checkedBigNumberify('./index.rsh:makeEnum', stdlib.UInt_max, '0'));
    
    return v120;})()) {
    const txn3 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 3,
      out_tys: [ctc3],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v125], secs: v127, time: v126, didSend: v54, from: v124 } = txn3;
    ;
    const v128 = stdlib.addressEq(v97, v124);
    stdlib.assert(v128, {
      at: './index.rsh:65:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    stdlib.protect(ctc4, await interact.seeMessage(v125, v98, v99), {
      at: './index.rsh:71:30:application',
      fs: ['at ./index.rsh:68:15:application call to [unknown function] (defined at: ./index.rsh:68:19:function exp)'],
      msg: 'seeMessage',
      who: 'Bob'
      });
    
    const txn4 = await (ctc.recv({
      didSend: false,
      evt_cnt: 1,
      funcNum: 4,
      out_tys: [ctc5],
      timeoutAt: undefined /* mto */,
      waitIfNotPresent: false
      }));
    const {data: [v135], secs: v137, time: v136, didSend: v67, from: v134 } = txn4;
    ;
    const v138 = stdlib.addressEq(v97, v134);
    stdlib.assert(v138, {
      at: './index.rsh:78:11:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Bob'
      });
    const cv109 = v135;
    const cv110 = v136;
    
    v109 = cv109;
    v110 = cv110;
    
    continue;
    
    
    
    }
  stdlib.protect(ctc4, await interact.endStream(), {
    at: './index.rsh:85:45:application',
    fs: ['at ./index.rsh:85:11:application call to [unknown function] (defined at: ./index.rsh:85:23:function exp)'],
    msg: 'endStream',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [],
    sigs: []
    },
  appApproval: `BiAEAAEEBSYCAQAAIjUAMRhBAaMpZEkiWzUBgQhbNQI2GgAXSUEAByI1BCM1BgA2GgIXNQQ2GgM2GgEXSYEDDEAAgUkkDEAAOiQSRCU0ARJENARJIhJMNAISEUQoZEk1AzX/STUFFzX+gAT5i694NP4WULA0/zEAEkQ0/zT+MgZCAMFIJDQBEkQ0BEkiEkw0AhIRRChkSTUDNf9JNQU1/oAERZ6bGDT+ULA0/zEAEkQ0/yhLAVcAIGdIJTUBMgY1AkIAv0kjDEAAMyMSRCM0ARJENARJIhJMNAISEUQoZDUDSTUFFzX/gAQPv8Y0NP8WUQcIULA0AyIyBkIAR0iBoI0GiADQIjQBEkQ0BEkiEkw0AhIRREk1BUlXAB41/1ceIDX+gAST4NI9NP9QNP5QsDEAKEsBVwAgZ0gjNQEyBjUCQgA/Nf81/jX9NP4iEkEAFDT9KEsBVwAgZ0gkNQEyBjUCQgAeQgAAMRklEkSxIrIBIrIII7IQMgmyCTIKsgezQgAFMRkiEkQpNAEWNAIWUGc0BkEACoAEFR98dTQHULA0AEkjCDIEEkQxFhJEI0MxGSISREL/3yIxNBJEgQIxNRJEIjE2EkQiMTcSRCI1ASI1AkL/rjQASUojCDUAOAcyChJEOBAjEkQ4CBJEiQ==`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 1,
  stateSize: 32,
  unsupported: [],
  version: 10,
  warnings: []
  };
const _ETH = {
  ABI: `[
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes30",
                "name": "v98",
                "type": "bytes30"
              },
              {
                "internalType": "address payable",
                "name": "v99",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "stateMutability": "payable",
    "type": "constructor"
  },
  {
    "inputs": [
      {
        "internalType": "uint256",
        "name": "msg",
        "type": "uint256"
      }
    ],
    "name": "ReachError",
    "type": "error"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bytes30",
                "name": "v98",
                "type": "bytes30"
              },
              {
                "internalType": "address payable",
                "name": "v99",
                "type": "address"
              }
            ],
            "internalType": "struct T1",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T2",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e0",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v106",
                "type": "bool"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e1",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes12",
                    "name": "elem4",
                    "type": "bytes12"
                  }
                ],
                "internalType": "struct T7",
                "name": "v125",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e3",
    "type": "event"
  },
  {
    "anonymous": false,
    "inputs": [
      {
        "indexed": false,
        "internalType": "address",
        "name": "_who",
        "type": "address"
      },
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e4",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "_reachCreationTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentState",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      },
      {
        "internalType": "bytes",
        "name": "",
        "type": "bytes"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [],
    "name": "_reachCurrentTime",
    "outputs": [
      {
        "internalType": "uint256",
        "name": "",
        "type": "uint256"
      }
    ],
    "stateMutability": "view",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "bool",
                "name": "v106",
                "type": "bool"
              }
            ],
            "internalType": "struct T5",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T6",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m1",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "components": [
                  {
                    "internalType": "bytes32",
                    "name": "elem0",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem1",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem2",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes32",
                    "name": "elem3",
                    "type": "bytes32"
                  },
                  {
                    "internalType": "bytes12",
                    "name": "elem4",
                    "type": "bytes12"
                  }
                ],
                "internalType": "struct T7",
                "name": "v125",
                "type": "tuple"
              }
            ],
            "internalType": "struct T8",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T9",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m3",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "inputs": [
      {
        "components": [
          {
            "internalType": "uint256",
            "name": "time",
            "type": "uint256"
          },
          {
            "components": [
              {
                "internalType": "uint256",
                "name": "v135",
                "type": "uint256"
              }
            ],
            "internalType": "struct T10",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T11",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m4",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x608060405260405162000c7738038062000c778339810160408190526200002691620001f1565b600080554360035560408051338152825160208083019190915280840151805161ffff19168385015201516001600160a01b0316606082015290517f950aa6165b6d4be86cbc218c9d19f163d31d981b26efc0a76e70c7098c9194469181900360800190a16200009934156007620000ea565b6040805160208082018352338083526001600081905543905583519182015290910160405160208183030381529060405260029080519060200190620000e192919062000114565b505050620002b9565b81620001105760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b82805462000122906200027c565b90600052602060002090601f01602090048101928262000146576000855562000191565b82601f106200016157805160ff191683800117855562000191565b8280016001018555821562000191579182015b828111156200019157825182559160200191906001019062000174565b506200019f929150620001a3565b5090565b5b808211156200019f5760008155600101620001a4565b604080519081016001600160401b0381118282101715620001eb57634e487b7160e01b600052604160045260246000fd5b60405290565b600081830360608112156200020557600080fd5b6200020f620001ba565b835181526040601f19830112156200022657600080fd5b62000230620001ba565b9150602084015161ffff19811681146200024957600080fd5b825260408401516001600160a01b03811681146200026657600080fd5b6020838101919091528101919091529392505050565b600181811c908216806200029157607f821691505b60208210811415620002b357634e487b7160e01b600052602260045260246000fd5b50919050565b6109ae80620002c96000396000f3fe6080604052600436106100565760003560e01c80631cfce5a11461005f5780631e93b0f11461007257806383230757146100965780639a3e3912146100ab578063a209ad4e146100be578063ab53f2c6146100d157005b3661005d57005b005b61005d61006d366004610782565b6100f4565b34801561007e57600080fd5b506003545b6040519081526020015b60405180910390f35b3480156100a257600080fd5b50600154610083565b61005d6100b93660046107ac565b61027d565b61005d6100cc3660046107ac565b6103c8565b3480156100dd57600080fd5b506100e6610536565b60405161008d9291906107cf565b610104600460005414600d6105d3565b61011e8135158061011757506001548235145b600e6105d3565b6000808055600280546101309061082c565b80601f016020809104026020016040519081016040528092919081815260200182805461015c9061082c565b80156101a95780601f1061017e576101008083540402835291602001916101a9565b820191906000526020600020905b81548152906001019060200180831161018c57829003601f168201915b50505050508060200190518101906101c19190610861565b90507f2bf5e0ce51ac86b4753bf0ca1e2a53b5c152ba2c991cfb852532c18855f7495033836040516101f49291906108c7565b60405180910390a16102083415600b6105d3565b8051610220906001600160a01b03163314600c6105d3565b60408051602081019091526000815281516001600160a01b03168082526005600055436001556040805160208101929092520160405160208183030381529060405260029080519060200190610277929190610677565b50505050565b61028d60016000541460096105d3565b6102a7813515806102a057506001548235145b600a6105d3565b6000808055600280546102b99061082c565b80601f01602080910402602001604051908101604052809291908181526020018280546102e59061082c565b80156103325780601f1061030757610100808354040283529160200191610332565b820191906000526020600020905b81548152906001019060200180831161031557829003601f168201915b505050505080602001905181019061034a9190610861565b90507fb6eea004ef7895e3731d4318847f013244765590bcd89a0cdcf6f1db231f4915338360405161037d92919061093b565b60405180910390a1610391341560086105d3565b6103996106fb565b815181516001600160a01b039091169052602080820180516000905251439101526103c3816105fc565b505050565b6103d860056000541460116105d3565b6103f2813515806103eb57506001548235145b60126105d3565b6000808055600280546104049061082c565b80601f01602080910402602001604051908101604052809291908181526020018280546104309061082c565b801561047d5780601f106104525761010080835404028352916020019161047d565b820191906000526020600020905b81548152906001019060200180831161046057829003601f168201915b50505050508060200190518101906104959190610861565b6040805133815284356020808301919091528501358183015290519192507f117ff0fc7909f539043dcba1a015e3c49852b86bcb1c87a6cfa653f771ccbdc0919081900360600190a16104ea3415600f6105d3565b8051610502906001600160a01b0316331460106105d3565b61050a6106fb565b815181516001600160a01b0390911690526020808201805182860135905251439101526103c3816105fc565b60006060600054600280805461054b9061082c565b80601f01602080910402602001604051908101604052809291908181526020018280546105779061082c565b80156105c45780601f10610599576101008083540402835291602001916105c4565b820191906000526020600020905b8154815290600101906020018083116105a757829003601f168201915b50505050509050915091509091565b816105f85760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b60208101515161065e576040805160208101909152600081528151516001600160a01b031680825260046000554360015560408051602081019290925201604051602081830303815290604052600290805190602001906103c3929190610677565b6000808055600181905561067490600290610737565b50565b8280546106839061082c565b90600052602060002090601f0160209004810192826106a557600085556106eb565b82601f106106be57805160ff19168380011785556106eb565b828001600101855582156106eb579182015b828111156106eb5782518255916020019190600101906106d0565b506106f792915061076d565b5090565b6040805160608101825260009181019182529081908152602001610732604051806040016040528060008152602001600081525090565b905290565b5080546107439061082c565b6000825580601f10610753575050565b601f01602090049060005260206000209081019061067491905b5b808211156106f7576000815560010161076e565b600060c0828403121561079457600080fd5b50919050565b60006040828403121561079457600080fd5b6000604082840312156107be57600080fd5b6107c8838361079a565b9392505050565b82815260006020604081840152835180604085015260005b81811015610803578581018301518582016060015282016107e7565b81811115610815576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061084057607f821691505b6020821081141561079457634e487b7160e01b600052602260045260246000fd5b60006020828403121561087357600080fd5b6040516020810181811067ffffffffffffffff821117156108a457634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146108be57600080fd5b81529392505050565b600060e08201905060018060a01b038416825282356020830152602083013560408301526040830135606083015260608301356080830152608083013560a083015260a08301356bffffffffffffffffffffffff60a01b811680821461092c57600080fd5b8060c085015250509392505050565b6001600160a01b03831681528135602080830191909152606082019083013580151580821461096957600080fd5b8060408501525050939250505056fea2646970667358221220994250764dc3cee6cff28752c3bb2118aeb666512eeff809a26a0c4e3210244e64736f6c634300080c0033`,
  BytecodeLen: 3191,
  Which: `oD`,
  version: 8,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:42:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:82:15:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  4: {
    at: './index.rsh:57:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  5: {
    at: './index.rsh:66:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ALGO: _ALGO,
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
