// Automatically generated with Reach 0.1.11 (a9f7613d)
/* eslint-disable */
export const _version = '0.1.11';
export const _versionHash = '0.1.11 (a9f7613d)';
export const _backendVersion = 17;

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
  
  return {
    infos: {
      },
    views: {
      1: [ctc0, ctc1],
      2: [ctc0, ctc1]
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
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Address;
  
  
  const v64 = stdlib.protect(ctc0, interact.info, 'for Alice\'s interact field info');
  const v65 = stdlib.protect(ctc0, interact.request, 'for Alice\'s interact field request');
  
  const txn1 = await (ctc.sendrecv({
    args: [v65],
    evt_cnt: 1,
    funcNum: 0,
    lct: stdlib.checkedBigNumberify('./index.rsh:22:11:dot', stdlib.UInt_max, '0'),
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:22:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn1) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v69], secs: v71, time: v70, didSend: v28, from: v68 } = txn1;
      
      ;
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v69], secs: v71, time: v70, didSend: v28, from: v68 } = txn1;
  ;
  const txn2 = await (ctc.recv({
    didSend: false,
    evt_cnt: 0,
    funcNum: 1,
    out_tys: [],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [], secs: v76, time: v75, didSend: v37, from: v74 } = txn2;
  ;
  const txn3 = await (ctc.sendrecv({
    args: [v68, v69, v64],
    evt_cnt: 1,
    funcNum: 2,
    lct: v75,
    onlyIf: true,
    out_tys: [ctc0],
    pay: [stdlib.checkedBigNumberify('./index.rsh:34:11:decimal', stdlib.UInt_max, '0'), []],
    sim_p: (async (txn3) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [v82], secs: v84, time: v83, didSend: v46, from: v81 } = txn3;
      
      ;
      sim_r.txns.push({
        kind: 'from',
        to: v68,
        tok: undefined /* Nothing */
        });
      sim_r.txns.push({
        kind: 'halt',
        tok: undefined /* Nothing */
        })
      sim_r.isHalt = true;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc1, ctc0, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v46, from: v81 } = txn3;
  ;
  const v85 = stdlib.addressEq(v68, v81);
  stdlib.assert(v85, {
    at: './index.rsh:34:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Alice'
    });
  ;
  return;
  
  
  
  
  
  
  };
export async function Bob(ctcTop, interact) {
  if (typeof(ctcTop) !== 'object' || ctcTop._initialize === undefined) {
    return Promise.reject(new Error(`The backend for Bob expects to receive a contract as its first argument.`));}
  if (typeof(interact) !== 'object') {
    return Promise.reject(new Error(`The backend for Bob expects to receive an interact object as its second argument.`));}
  const ctc = ctcTop._initialize();
  const stdlib = ctc.stdlib;
  const ctc0 = stdlib.T_UInt;
  const ctc1 = stdlib.T_Null;
  const ctc2 = stdlib.T_Address;
  
  
  const txn1 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 0,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v69], secs: v71, time: v70, didSend: v28, from: v68 } = txn1;
  ;
  stdlib.protect(ctc1, await interact.want(v69), {
    at: './index.rsh:26:26:application',
    fs: ['at ./index.rsh:25:15:application call to [unknown function] (defined at: ./index.rsh:25:19:function exp)'],
    msg: 'want',
    who: 'Bob'
    });
  
  const txn2 = await (ctc.sendrecv({
    args: [v68, v69],
    evt_cnt: 0,
    funcNum: 1,
    lct: v70,
    onlyIf: true,
    out_tys: [],
    pay: [v69, []],
    sim_p: (async (txn2) => {
      const sim_r = { txns: [], mapRefs: [], maps: [] };
      let sim_txn_ctr = stdlib.UInt_max;
      const getSimTokCtr = () => { sim_txn_ctr = sim_txn_ctr.sub(1); return sim_txn_ctr; };
      
      
      const {data: [], secs: v76, time: v75, didSend: v37, from: v74 } = txn2;
      
      sim_r.txns.push({
        amt: v69,
        kind: 'to',
        tok: undefined /* Nothing */
        });
      sim_r.isHalt = false;
      
      return sim_r;
      }),
    soloSend: true,
    timeoutAt: undefined /* mto */,
    tys: [ctc2, ctc0],
    waitIfNotPresent: false
    }));
  const {data: [], secs: v76, time: v75, didSend: v37, from: v74 } = txn2;
  ;
  const txn3 = await (ctc.recv({
    didSend: false,
    evt_cnt: 1,
    funcNum: 2,
    out_tys: [ctc0],
    timeoutAt: undefined /* mto */,
    waitIfNotPresent: false
    }));
  const {data: [v82], secs: v84, time: v83, didSend: v46, from: v81 } = txn3;
  ;
  const v85 = stdlib.addressEq(v68, v81);
  stdlib.assert(v85, {
    at: './index.rsh:34:11:dot',
    fs: [],
    msg: 'sender correct',
    who: 'Bob'
    });
  ;
  stdlib.protect(ctc1, await interact.got(v82), {
    at: './index.rsh:39:23:application',
    fs: ['at ./index.rsh:38:15:application call to [unknown function] (defined at: ./index.rsh:38:19:function exp)'],
    msg: 'got',
    who: 'Bob'
    });
  
  return;
  
  
  
  
  
  
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
                "internalType": "uint256",
                "name": "v69",
                "type": "uint256"
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
                "internalType": "uint256",
                "name": "v69",
                "type": "uint256"
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "indexed": false,
        "internalType": "struct T4",
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
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
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
    "name": "_reach_e2",
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
            "internalType": "bool",
            "name": "msg",
            "type": "bool"
          }
        ],
        "internalType": "struct T4",
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
                "internalType": "uint256",
                "name": "v82",
                "type": "uint256"
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
  Bytecode: `0x60806040526040516109be3803806109be833981016040819052610022916101a1565b6000805543600355604080513381528251602080830191909152830151518183015290517f28822ae872174fb8917549901c639f920e5c2ef0fb881ea78a94dee578586e9d9181900360600190a161007c341560076100df565b6040805180820182526000602080830182815233808552868301515182526001938490554390935584518083019390935251828501528351808303850181526060909201909352805191926100d79260029290910190610108565b50505061027a565b816101045760405163100960cb60e01b81526004810182905260240160405180910390fd5b5050565b8280546101149061023f565b90600052602060002090601f016020900481019282610136576000855561017c565b82601f1061014f57805160ff191683800117855561017c565b8280016001018555821561017c579182015b8281111561017c578251825591602001919060010190610161565b5061018892915061018c565b5090565b5b80821115610188576000815560010161018d565b60008183036040808212156101b557600080fd5b80518082016001600160401b0380821183831017156101e457634e487b7160e01b600052604160045260246000fd5b818452865183526020601f19860112156101fd57600080fd5b83519450602085019150848210818311171561022957634e487b7160e01b600052604160045260246000fd5b5090915260209384015182529283015250919050565b600181811c9082168061025357607f821691505b6020821081141561027457634e487b7160e01b600052602260045260246000fd5b50919050565b610735806102896000396000f3fe60806040526004361061004b5760003560e01c80631e93b0f1146100545780632c10a1591461007857806345f703961461008b578063832307571461009e578063ab53f2c6146100b357005b3661005257005b005b34801561006057600080fd5b506003545b6040519081526020015b60405180910390f35b61005261008636600461059b565b6100d6565b61005261009936600461059b565b610259565b3480156100aa57600080fd5b50600154610065565b3480156100bf57600080fd5b506100c86103eb565b60405161006f9291906105be565b6100e66001600054146009610488565b610100813515806100f957506001548235145b600a610488565b6000808055600280546101129061061b565b80601f016020809104026020016040519081016040528092919081815260200182805461013e9061061b565b801561018b5780601f106101605761010080835404028352916020019161018b565b820191906000526020600020905b81548152906001019060200180831161016e57829003601f168201915b50505050508060200190518101906101a39190610650565b90507f400d21ea4e4a5e28b4ae5f0f476c201fc8036473fcf7c8cd252f38698020b4f133836040516101d69291906106c2565b60405180910390a16101ef816020015134146008610488565b6040805180820182526000808252602080830182815285516001600160a01b031680855286830151825260029384905543600155855180840191909152905181860152845180820386018152606090910190945283519293610253939101906104ad565b50505050565b610269600260005414600d610488565b6102838135158061027c57506001548235145b600e610488565b6000808055600280546102959061061b565b80601f01602080910402602001604051908101604052809291908181526020018280546102c19061061b565b801561030e5780601f106102e35761010080835404028352916020019161030e565b820191906000526020600020905b8154815290600101906020018083116102f157829003601f168201915b50505050508060200190518101906103269190610650565b6040805133815284356020808301919091528501358183015290519192507f263ae805ef0ac75eacb24e0a5ab78e31f247f0b08fe9d5cbf5188647933698b8919081900360600190a161037b3415600b610488565b8051610393906001600160a01b03163314600c610488565b805160208201516040516001600160a01b039092169181156108fc0291906000818181858888f193505050501580156103d0573d6000803e3d6000fd5b50600080805560018190556103e790600290610531565b5050565b6000606060005460028080546104009061061b565b80601f016020809104026020016040519081016040528092919081815260200182805461042c9061061b565b80156104795780601f1061044e57610100808354040283529160200191610479565b820191906000526020600020905b81548152906001019060200180831161045c57829003601f168201915b50505050509050915091509091565b816103e75760405163100960cb60e01b81526004810182905260240160405180910390fd5b8280546104b99061061b565b90600052602060002090601f0160209004810192826104db5760008555610521565b82601f106104f457805160ff1916838001178555610521565b82800160010185558215610521579182015b82811115610521578251825591602001919060010190610506565b5061052d92915061056e565b5090565b50805461053d9061061b565b6000825580601f1061054d575050565b601f01602090049060005260206000209081019061056b919061056e565b50565b5b8082111561052d576000815560010161056f565b60006040828403121561059557600080fd5b50919050565b6000604082840312156105ad57600080fd5b6105b78383610583565b9392505050565b82815260006020604081840152835180604085015260005b818110156105f2578581018301518582016060015282016105d6565b81811115610604576000606083870101525b50601f01601f191692909201606001949350505050565b600181811c9082168061062f57607f821691505b6020821081141561059557634e487b7160e01b600052602260045260246000fd5b60006040828403121561066257600080fd5b6040516040810181811067ffffffffffffffff8211171561069357634e487b7160e01b600052604160045260246000fd5b60405282516001600160a01b03811681146106ad57600080fd5b81526020928301519281019290925250919050565b6001600160a01b0383168152813560208083019190915260608201908301358015158082146106f057600080fd5b8060408501525050939250505056fea26469706673582212203ac824d7e2675a053042359bc8ea9ebeb086ec954e14412bb42eea732ff4f5e864736f6c634300080c0033`,
  BytecodeLen: 2494,
  Which: `oD`,
  version: 7,
  views: {
    }
  };
export const _stateSourceMap = {
  1: {
    at: './index.rsh:23:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  2: {
    at: './index.rsh:29:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    },
  3: {
    at: './index.rsh:36:17:after expr stmt semicolon',
    fs: [],
    msg: null,
    who: 'Module'
    }
  };
export const _Connectors = {
  ETH: _ETH
  };
export const _Participants = {
  "Alice": Alice,
  "Bob": Bob
  };
export const _APIs = {
  };
