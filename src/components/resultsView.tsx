import { useEffect } from "react";
import Prism from "prismjs";
import "prismjs/themes/prism-okaidia.css";
import "prismjs/components/prism-jsx.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.js";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export default function ResultsView() {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  const mdText =
    "# Summary\n - [controlled-array-length](#controlled-array-length) (1 results) (High)\n - [reentrancy-events](#reentrancy-events) (1 results) (Low)\n - [solc-version](#solc-version) (2 results) (Informational)\n - [low-level-calls](#low-level-calls) (1 results) (Informational)\n - [naming-convention](#naming-convention) (9 results) (Informational)\n - [external-function](#external-function) (1 results) (Optimization)\n## controlled-array-length\nImpact: High\nConfidence: Medium\n - [ ] ID-0\n[MultiSigWallet](MultiSigWallet.sol#L3-L237) contract sets array length with a user-controlled value:\n\t- [owners.push(owner)](MultiSigWallet.sol#L75)\n\nMultiSigWallet.sol#L3-L237\n\n\n## reentrancy-events\nImpact: Low\nConfidence: Medium\n - [ ] ID-1\nReentrancy in [MultiSigWallet.executeTransaction(uint256)](MultiSigWallet.sol#L156-L175):\n\tExternal calls:\n\t- [(success) = transaction.to.call.value(transaction.value)(transaction.data)](MultiSigWallet.sol#L171)\n\tEvent emitted after the call(s):\n\t- [ExecuteTransaction(msg.sender,_txIndex)](MultiSigWallet.sol#L174)\n\nMultiSigWallet.sol#L156-L175\n\n\n## solc-version\nImpact: Informational\nConfidence: High\n - [ ] ID-2\nPragma version[^0.5.16](MultiSigWallet.sol#L1) allows old versions\n\nMultiSigWallet.sol#L1\n\n\n - [ ] ID-3\nsolc-0.5.16 is not recommended for deployment\n\n## low-level-calls\nImpact: Informational\nConfidence: High\n - [ ] ID-4\nLow level call in [MultiSigWallet.executeTransaction(uint256)](MultiSigWallet.sol#L156-L175):\n\t- [(success) = transaction.to.call.value(transaction.value)(transaction.data)](MultiSigWallet.sol#L171)\n\nMultiSigWallet.sol#L156-L175\n\n\n## naming-convention\nImpact: Informational\nConfidence: High\n - [ ] ID-5\nParameter [MultiSigWallet.submitTransaction(address,uint256,bytes)._data](MultiSigWallet.sol#L103) is not in mixedCase\n\nMultiSigWallet.sol#L103\n\n\n - [ ] ID-6\nParameter [MultiSigWallet.submitTransaction(address,uint256,bytes)._to](MultiSigWallet.sol#L103) is not in mixedCase\n\nMultiSigWallet.sol#L103\n\n\n - [ ] ID-7\nParameter [MultiSigWallet.executeTransaction(uint256)._txIndex](MultiSigWallet.sol#L156) is not in mixedCase\n\nMultiSigWallet.sol#L156\n\n\n - [ ] ID-8\nParameter [MultiSigWallet.confirmTransaction(uint256)._txIndex](MultiSigWallet.sol#L133) is not in mixedCase\n\nMultiSigWallet.sol#L133\n\n\n - [ ] ID-9\nParameter [MultiSigWallet.isConfirmed(uint256,address)._txIndex](MultiSigWallet.sol#L228) is not in mixedCase\n\nMultiSigWallet.sol#L228\n\n\n - [ ] ID-10\nParameter [MultiSigWallet.submitTransaction(address,uint256,bytes)._value](MultiSigWallet.sol#L103) is not in mixedCase\n\nMultiSigWallet.sol#L103\n\n\n - [ ] ID-11\nParameter [MultiSigWallet.isConfirmed(uint256,address)._owner](MultiSigWallet.sol#L228) is not in mixedCase\n\nMultiSigWallet.sol#L228\n\n\n - [ ] ID-12\nParameter [MultiSigWallet.getTransaction(uint256)._txIndex](MultiSigWallet.sol#L212) is not in mixedCase\n\nMultiSigWallet.sol#L212\n\n\n - [ ] ID-13\nParameter [MultiSigWallet.revokeConfirmation(uint256)._txIndex](MultiSigWallet.sol#L188) is not in mixedCase\n\nMultiSigWallet.sol#L188\n\n\n## external-function\nImpact: Optimization\nConfidence: High\n - [ ] ID-14\nsubmitTransaction(address,uint256,bytes) should be declared external:\n\t- [MultiSigWallet.submitTransaction(address,uint256,bytes)](MultiSigWallet.sol#L103-L118)\nMoreover, the following function parameters should change its data location:\n_data location should be calldata\n\nMultiSigWallet.sol#L103-L118\n\n\n";

  const otherText = `INFO:Detectors:
    MultiSigWallet (MultiSigWallet.sol#3-237) contract sets array length with a user-controlled value:
            - owners.push(owner) (MultiSigWallet.sol#75)
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#array-length-assignment
    INFO:Detectors:
    Reentrancy in MultiSigWallet.executeTransaction(uint256) (MultiSigWallet.sol#156-175):
            External calls:
            - (success) = transaction.to.call.value(transaction.value)(transaction.data) (MultiSigWallet.sol#171)
            Event emitted after the call(s):
            - ExecuteTransaction(msg.sender,_txIndex) (MultiSigWallet.sol#174)
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#reentrancy-vulnerabilities-3
    INFO:Detectors:
    Pragma version^0.5.16 (MultiSigWallet.sol#1) allows old versions
    solc-0.5.16 is not recommended for deployment
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#incorrect-versions-of-solidity
    INFO:Detectors:
    Low level call in MultiSigWallet.executeTransaction(uint256) (MultiSigWallet.sol#156-175):
            - (success) = transaction.to.call.value(transaction.value)(transaction.data) (MultiSigWallet.sol#171)
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#low-level-calls
    INFO:Detectors:
    Parameter MultiSigWallet.submitTransaction(address,uint256,bytes)._to (MultiSigWallet.sol#103) is not in mixedCase
    Parameter MultiSigWallet.submitTransaction(address,uint256,bytes)._value (MultiSigWallet.sol#103) is not in mixedCase
    Parameter MultiSigWallet.submitTransaction(address,uint256,bytes)._data (MultiSigWallet.sol#103) is not in mixedCase
    Parameter MultiSigWallet.confirmTransaction(uint256)._txIndex (MultiSigWallet.sol#133) is not in mixedCase
    Parameter MultiSigWallet.executeTransaction(uint256)._txIndex (MultiSigWallet.sol#156) is not in mixedCase
    Parameter MultiSigWallet.revokeConfirmation(uint256)._txIndex (MultiSigWallet.sol#188) is not in mixedCase
    Parameter MultiSigWallet.getTransaction(uint256)._txIndex (MultiSigWallet.sol#212) is not in mixedCase
    Parameter MultiSigWallet.isConfirmed(uint256,address)._txIndex (MultiSigWallet.sol#228) is not in mixedCase
    Parameter MultiSigWallet.isConfirmed(uint256,address)._owner (MultiSigWallet.sol#228) is not in mixedCase
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#conformance-to-solidity-naming-conventions
    INFO:Detectors:
    submitTransaction(address,uint256,bytes) should be declared external:
            - MultiSigWallet.submitTransaction(address,uint256,bytes) (MultiSigWallet.sol#103-118)
    Moreover, the following function parameters should change its data location:
    _data location should be calldata
    Reference: https://github.com/crytic/slither/wiki/Detector-Documentation#public-function-that-could-be-declared-external
    INFO:Slither:. analyzed (1 contracts with 85 detectors), 15 result(s) found`;

  return (
    <>
      <div></div>
      <pre
        className="line-numbers"
        style={{
          backgroundColor: "white",
        }}
      >
        <code
          className="language-jsx __className_46b4a6"
          style={{
            color: "black",
            fontFamily: "VictorMono",
            textShadow: "none",
            fontWeight: "500",
            margin: "10px",
          }}
        >
          {otherText}
        </code>
      </pre>
    </>
  );
}
