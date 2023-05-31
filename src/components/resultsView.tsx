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

  return (
    <>
      <pre className="line-numbers">
        <code className="language-jsx">{mdText}</code>
      </pre>
    </>
  );
}
