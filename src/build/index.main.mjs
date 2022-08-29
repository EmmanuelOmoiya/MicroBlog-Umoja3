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
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '218'));
  const ctc4 = stdlib.T_Object({
    author: ctc0,
    content: ctc1,
    isDeleted: ctc2,
    title: ctc3
    });
  
  const Info_post = async (i, svs, args) => {
    if (stdlib.eq(i, stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '3'))) {
      const [v82, v83, v95] = svs;
      return (await ((async () => {
        
        
        return v83;}))(...args));
      }
    
    stdlib.assert(false, 'illegal view')
    };
  return {
    infos: {
      Info: {
        post: {
          decode: Info_post,
          dom: [],
          rng: ctc4
          }
        }
      },
    views: {
      3: [ctc0, ctc4, ctc1]
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
export async function Admin(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Admin expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Admin expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_Address;
  const ctc1 = stdlib.T_UInt;
  const ctc2 = stdlib.T_Bool;
  const ctc3 = stdlib.T_Bytes(stdlib.checkedBigNumberify('<builtin>', stdlib.UInt_max, '218'));
  const ctc4 = stdlib.T_Object({
    author: ctc0,
    content: ctc1,
    isDeleted: ctc2,
    title: ctc3
    });
  const ctc5 = stdlib.T_Null;
  
  
  const v77 = stdlib.protect(ctc4, await interact.post(), {
    at: './index.rsh:26:42:application',
    fs: ['at ./index.rsh:25:13:application call to [unknown function] (defined at: ./index.rsh:25:16:function exp)'],
    msg: 'post',
    who: 'Admin'
    });
  
  const txn1 = await (ctc.sendrecv({
    args: [v77],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:28:9:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc4],
    pay: [stdlib.checkedBigNumberify('./index.rsh:28:9:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v83], secs: v85, time: v84, didSend: v31, from: v82 } = txn1;
      
      ;
      
      const v95 = stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, '0');
      const v96 = v84;
      
      if (await (async () => {
        const v102 = stdlib.lt(v95, stdlib.checkedBigNumberify('./index.rsh:34:17:decimal', stdlib.UInt_max, '5'));
        
        return v102;})()) {
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
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc4],
    waitIfNotPresent: false
    }));
  const {data: [v83], secs: v85, time: v84, didSend: v31, from: v82 } = txn1;
  ;
  stdlib.protect(ctc5, await interact.getPost(v83), {
    at: './index.rsh:30:25:application',
    fs: ['at ./index.rsh:30:25:application call to [unknown function] (defined at: ./index.rsh:30:25:function exp)', 'at ./index.rsh:30:25:application call to "liftedInteract" (defined at: ./index.rsh:30:25:application)'],
    msg: 'getPost',
    who: 'Admin'
    });
  
  let v95 = stdlib.checkedBigNumberify('./index.rsh:32:18:decimal', stdlib.UInt_max, '0');
  let v96 = v84;
  
  while (await (async () => {
    const v102 = stdlib.lt(v95, stdlib.checkedBigNumberify('./index.rsh:34:17:decimal', stdlib.UInt_max, '5'));
    
    return v102;})()) {
    stdlib.protect(ctc5, await interact.observe(), {
      at: './index.rsh:36:29:application',
      fs: ['at ./index.rsh:36:29:application call to [unknown function] (defined at: ./index.rsh:36:29:function exp)', 'at ./index.rsh:36:29:application call to "liftedInteract" (defined at: ./index.rsh:36:29:application)'],
      msg: 'observe',
      who: 'Admin'
      });
    
    const txn2 = await (ctc.sendrecv({
      args: [v82, v83, v95],
      evt_cnt: 0,
      funcNum: 2,
      lct: v96,
      onlyIf: true,
      out_tys: [],
      pay: [stdlib.checkedBigNumberify('./index.rsh:37:13:decimal', stdlib.UInt_max, '0'), []],
      sim_p: (async (txn2) => {
        const sim_r = { txns: [], mapRefs: [], maps: [] };
        let sim_txn_ctr = stdlib.UInt_max;
        const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
        
        
        const {data: [], secs: v106, time: v105, didSend: v58, from: v104 } = txn2;
        
        ;
        const v108 = stdlib.safeAdd(v95, stdlib.checkedBigNumberify('./index.rsh:38:15:decimal', stdlib.UInt_max, '1'));
        const cv95 = v108;
        const cv96 = v105;
        
        await (async () => {
          const v95 = cv95;
          const v96 = cv96;
          
          if (await (async () => {
            const v102 = stdlib.lt(v95, stdlib.checkedBigNumberify('./index.rsh:34:17:decimal', stdlib.UInt_max, '5'));
            
            return v102;})()) {
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
      tys: [ctc0, ctc4, ctc1],
      waitIfNotPresent: false
      }));
    const {data: [], secs: v106, time: v105, didSend: v58, from: v104 } = txn2;
    ;
    const v107 = stdlib.addressEq(v82, v104);
    stdlib.assert(v107, {
      at: './index.rsh:37:13:dot',
      fs: [],
      msg: 'sender correct',
      who: 'Admin'
      });
    const v108 = stdlib.safeAdd(v95, stdlib.checkedBigNumberify('./index.rsh:38:15:decimal', stdlib.UInt_max, '1'));
    const cv95 = v108;
    const cv96 = v105;
    
    v95 = cv95;
    v96 = cv96;
    
    continue;
    
    }
  return;
  
  
  };
const _ALGO = {
  ABI: {
    impure: [],
    pure: [`Info_post()(address,uint64,byte,byte[218])`],
    sigs: [`Info_post()(address,uint64,byte,byte[218])`]
    },
  appApproval: `BiAHAAEDIIMCAgUmBAEAAQEBAgAiNQAxGEEBVCtkSSJbNQGBCFs1AjYaABdJQQAnIjUEIzUGgZPb0YQJEkQ0ASQSRChkKWRQKmRQSTUDJSEEWDUHQgERNhoCFzUENhoDNhoBF0khBQxAAEYhBRJEJDQBEkQ0BEkiEkw0AhIRRChkKWRQKmRQSTUDVwAgNf+ABEGxQE2wNP8xABJENP80AyUhBFg0A4GjAlsjCDIGQgAzIhJEgaCNBogA0yI0ARJENARJIhJMNAISEURJNQU1/4AEzP2PQzT/ULAxADT/IjIGQgAANf81/jX9Nfw0/iEGDEEAKTT8NP1QNP4WUChLAVcAf2cpSwFXf39nKksBV/4tZ0gkNQEyBjUCQgAfQgAAMRkhBhJEsSKyASKyCCOyEDIJsgkyCrIHs0IABTEZIhJEKzQBFjQCFlBnNAZBAAqABBUffHU0B1CwNABJIwgyBBJEMRYSRCNDMRkiEkRC/98iMTQSRIEEMTUSRCIxNhJEIjE3EkQiNQEiNQJC/640AElKIwg1ADgHMgoSRDgQIxJEOAgSRIk=`,
  appClear: `Bg==`,
  companionInfo: null,
  extraPages: 0,
  mapDataKeys: 0,
  mapDataSize: 0,
  stateKeys: 3,
  stateSize: 299,
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
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_author",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_content",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "_isDeleted",
                    "type": "bool"
                  },
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
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes26",
                        "name": "elem6",
                        "type": "bytes26"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_title",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T2",
                "name": "v83",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "internalType": "struct T8",
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
                "components": [
                  {
                    "internalType": "address payable",
                    "name": "_author",
                    "type": "address"
                  },
                  {
                    "internalType": "uint256",
                    "name": "_content",
                    "type": "uint256"
                  },
                  {
                    "internalType": "bool",
                    "name": "_isDeleted",
                    "type": "bool"
                  },
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
                        "internalType": "bytes32",
                        "name": "elem4",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes32",
                        "name": "elem5",
                        "type": "bytes32"
                      },
                      {
                        "internalType": "bytes26",
                        "name": "elem6",
                        "type": "bytes26"
                      }
                    ],
                    "internalType": "struct T1",
                    "name": "_title",
                    "type": "tuple"
                  }
                ],
                "internalType": "struct T2",
                "name": "v83",
                "type": "tuple"
              }
            ],
            "internalType": "struct T7",
            "name": "msg",
            "type": "tuple"
          }
        ],
        "indexed": false,
        "internalType": "struct T8",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_e2",
    "type": "event"
  },
  {
    "stateMutability": "payable",
    "type": "fallback"
  },
  {
    "inputs": [],
    "name": "Info_post",
    "outputs": [
      {
        "components": [
          {
            "internalType": "address payable",
            "name": "_author",
            "type": "address"
          },
          {
            "internalType": "uint256",
            "name": "_content",
            "type": "uint256"
          },
          {
            "internalType": "bool",
            "name": "_isDeleted",
            "type": "bool"
          },
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
                "internalType": "bytes32",
                "name": "elem4",
                "type": "bytes32"
              },
              {
                "internalType": "bytes32",
                "name": "elem5",
                "type": "bytes32"
              },
              {
                "internalType": "bytes26",
                "name": "elem6",
                "type": "bytes26"
              }
            ],
            "internalType": "struct T1",
            "name": "_title",
            "type": "tuple"
          }
        ],
        "internalType": "struct T2",
        "name": "",
        "type": "tuple"
      }
    ],
    "stateMutability": "view",
    "type": "function"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T10",
        "name": "_a",
        "type": "tuple"
      }
    ],
    "name": "_reach_m2",
    "outputs": [],
    "stateMutability": "payable",
    "type": "function"
  },
  {
    "stateMutability": "payable",
    "type": "receive"
  }
]`,
  Bytecode: `0x60806040526040516200119c3803806200119c833981016040819052620000269162000459565b60008055436003556040517f9e12a138c20c4ebd93f5479359713217537e2b2360e7f25fdd7bab6ee3dc3970906200006290339084906200057c565b60405180910390a16200007834156008620000b4565b620000826200017d565b80513390526020808301515182518201528082018051600090525143910152620000ac81620000de565b505062000712565b81620000da5760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b602081015151600511156200016257620000f76200022b565b8151516001600160a01b03168152815160209081015181830152808301515160408084019190915260036000554360015551620001379183910162000628565b604051602081830303815290604052600290805190602001906200015d929190620002af565b505050565b600080805560018190556200017a906002906200033e565b50565b604051806040016040528062000203604051806040016040528060006001600160a01b0316815260200162000226604080516080808201835260008083526020808401829052838501829052845160e081018652828152908101829052938401819052606084810182905291840181905260a0840181905260c084015290919082015290565b815260200162000226604051806040016040528060008152602001600081525090565b905290565b604051806060016040528060006001600160a01b03168152602001620002a2604080516080808201835260008083526020808401829052838501829052845160e081018652828152908101829052938401819052606084810182905291840181905260a0840181905260c084015290919082015290565b8152602001600081525090565b828054620002bd90620006d5565b90600052602060002090601f016020900481019282620002e157600085556200032c565b82601f10620002fc57805160ff19168380011785556200032c565b828001600101855582156200032c579182015b828111156200032c5782518255916020019190600101906200030f565b506200033a92915062000378565b5090565b5080546200034c90620006d5565b6000825580601f106200035d575050565b601f0160209004906000526020600020908101906200017a91905b5b808211156200033a576000815560010162000379565b604080519081016001600160401b0381118282101715620003c057634e487b7160e01b600052604160045260246000fd5b60405290565b604051602081016001600160401b0381118282101715620003c057634e487b7160e01b600052604160045260246000fd5b604051608081016001600160401b0381118282101715620003c057634e487b7160e01b600052604160045260246000fd5b60405160e081016001600160401b0381118282101715620003c057634e487b7160e01b600052604160045260246000fd5b60008183036101608112156200046e57600080fd5b620004786200038f565b8351815261014080601f19840112156200049157600080fd5b6200049b620003c6565b620004a5620003f7565b60208701516001600160a01b0381168114620004c057600080fd5b81526040870151602082015260608701518015158114620004e057600080fd5b604082015260e0607f1986011215620004f857600080fd5b6200050262000428565b94506080870151855260a0870151602086015260c0870151604086015260e08701516060860152610100870151608086015261012087015160a086015282870151925065ffffffffffff19831683146200055b57600080fd5b60c08501929092526060820193909352825260208101919091529392505050565b60006101808201905060018060a01b03841682528251602083015260208301516200062060408401825160018060a01b0381511682526020810151602083015260408101511515604083015260608101518051606084015260208101516080840152604081015160a0840152606081015160c0840152608081015160e084015260a081015161010084015265ffffffffffff1960c082015116610120840152505050565b509392505050565b81516001600160a01b03168152602080830151610180830191620006c39084018260018060a01b0381511682526020810151602083015260408101511515604083015260608101518051606084015260208101516080840152604081015160a0840152606081015160c0840152608081015160e084015260a081015161010084015265ffffffffffff1960c082015116610120840152505050565b50604083015161016083015292915050565b600181811c90821680620006ea57607f821691505b602082108114156200070c57634e487b7160e01b600052602260045260246000fd5b50919050565b610a7a80620007226000396000f3fe60806040526004361061004b5760003560e01c8063017afd70146100545780631e93b0f11461007f5780637eea518c1461009e57806383230757146100b1578063ab53f2c6146100c657005b3661005257005b005b34801561006057600080fd5b506100696100e9565b604051610076919061072e565b60405180910390f35b34801561008b57600080fd5b506003545b604051908152602001610076565b6100526100ac36600461073d565b610102565b3480156100bd57600080fd5b50600154610090565b3480156100d257600080fd5b506100db610282565b604051610076929190610755565b6100f16104fc565b60006100fc8161031f565b91505090565b610112600360005414600b6103ee565b61012c8135158061012557506001548235145b600c6103ee565b60008080556002805461013e906107b2565b80601f016020809104026020016040519081016040528092919081815260200182805461016a906107b2565b80156101b75780601f1061018c576101008083540402835291602001916101b7565b820191906000526020600020905b81548152906001019060200180831161019a57829003601f168201915b50505050508060200190518101906101cf91906108a5565b90507f919263be6d51bec670ce110fb6a7df03fe323e3de4dade5355bccc6a4b06d95033836040516102029291906109af565b60405180910390a1610216341560096103ee565b805161022e906001600160a01b03163314600a6103ee565b610236610559565b815181516001600160a01b0390911690526020808301518251909101526040820151610263906001610418565b602080830180519290925290514391015261027d8161046b565b505050565b600060606000546002808054610297906107b2565b80601f01602080910402602001604051908101604052809291908181526020018280546102c3906107b2565b80156103105780601f106102e557610100808354040283529160200191610310565b820191906000526020600020905b8154815290600101906020018083116102f357829003601f168201915b50505050509050915091509091565b6103276104fc565b600360005414156103dd57600060028054610341906107b2565b80601f016020809104026020016040519081016040528092919081815260200182805461036d906107b2565b80156103ba5780601f1061038f576101008083540402835291602001916103ba565b820191906000526020600020905b81548152906001019060200180831161039d57829003601f168201915b50505050508060200190518101906103d291906108a5565b602001519392505050565b6103e9600060076103ee565b919050565b816104145760405163100960cb60e01b8152600481018290526024015b60405180910390fd5b5050565b60008261042583826109e7565b91508110156104655760405162461bcd60e51b815260206004820152600c60248201526b616464206f766572666c6f7760a01b604482015260640161040b565b92915050565b602081015151600511156104e35761048161058e565b8151516001600160a01b031681528151602090810151818301528083015151604080840191909152600360005543600155516104bf91839101610a0d565b6040516020818303038152906040526002908051906020019061027d9291906105be565b600080805560018190556104f990600290610642565b50565b604080516080808201835260008083526020808401829052838501829052845160e081018652828152908101829052938401819052606084810182905291840181905260a0840181905260c084015290919082015290565b905290565b604051806040016040528061056c61067c565b8152602001610554604051806040016040528060008152602001600081525090565b604051806060016040528060006001600160a01b031681526020016105b16104fc565b8152602001600081525090565b8280546105ca906107b2565b90600052602060002090601f0160209004810192826105ec5760008555610632565b82601f1061060557805160ff1916838001178555610632565b82800160010185558215610632579182015b82811115610632578251825591602001919060010190610617565b5061063e92915061069f565b5090565b50805461064e906107b2565b6000825580601f1061065e575050565b601f0160209004906000526020600020908101906104f9919061069f565b604051806040016040528060006001600160a01b031681526020016105546104fc565b5b8082111561063e57600081556001016106a0565b60018060a01b0381511682526020810151602083015260408101511515604083015260608101518051606084015260208101516080840152604081015160a0840152606081015160c0840152608081015160e084015260a081015161010084015265ffffffffffff1960c082015116610120840152505050565b610140810161046582846106b4565b60006040828403121561074f57600080fd5b50919050565b82815260006020604081840152835180604085015260005b818110156107895785810183015185820160600152820161076d565b8181111561079b576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c908216806107c657607f821691505b6020821081141561074f57634e487b7160e01b600052602260045260246000fd5b6040516060810167ffffffffffffffff8111828210171561081857634e487b7160e01b600052604160045260246000fd5b60405290565b6040516080810167ffffffffffffffff8111828210171561081857634e487b7160e01b600052604160045260246000fd5b60405160e0810167ffffffffffffffff8111828210171561081857634e487b7160e01b600052604160045260246000fd5b80516001600160a01b03811681146103e957600080fd5b80151581146104f957600080fd5b60008183036101808112156108b957600080fd5b6108c16107e7565b6108ca84610880565b815261014080601f19840112156108e057600080fd5b6108e861081e565b6108f460208701610880565b815260408601516020820152606086015161090e81610897565b604082015260e0607f198501121561092557600080fd5b61092d61084f565b93506080860151845260a0860151602085015260c0860151604085015260e08601516060850152610100860151608085015261012086015160a085015281860151915065ffffffffffff198216821461098557600080fd5b8160c085015283606082015280602084015250506101608401516040820152809250505092915050565b6001600160a01b0383168152813560208083019190915260608201908301356109d781610897565b8015156040840152509392505050565b60008219821115610a0857634e487b7160e01b600052601160045260246000fd5b500190565b81516001600160a01b03168152602080830151610180830191610a32908401826106b4565b5060408301516101608301529291505056fea264697066735822122006bcae3073e392f39a9c96c49bf3326a81e4387592f1290454f023b4a3f020c564736f6c634300080c0033`,
  BytecodeLen: 4508,
  Which: `oD`,
  version: 8,
  views: {
    Info: {
      post: `Info_post`
      }
    }
  };
export const _stateSourceMap = {
  2: {
    at: './index.rsh:41:11:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:35:15:after expr stmt semicolon',
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
  "Admin": Admin
  };
export const _APIs = {
  };
