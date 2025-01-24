import { useState } from 'react';
import { accountList } from './account';
import { Term } from './types';
import InputCheckboxList from '@/shared/ui/InputCheckboxList';

export default function Terms() {
  const [termsAgreements, setTermsAgreements] = useState(() =>
    generateInitialValues(accountList),
  );

  const handleAgreement = (id: string, checked: boolean) => {
    setTermsAgreements((prev) => {
      return prev.map((term) => (term.id === id ? { ...term, checked } : term));
    });
  };
  const handleAllAgreement = (checked: boolean) => {
    setTermsAgreements((prev) => {
      return prev.map((term) => ({ ...term, checked }));
    });
  };
  const isAllChecked = termsAgreements.every((term) => term.checked);
  const isMandatoryChecked = termsAgreements
    .filter((term) => term.mandatory)
    .every((term) => term.checked);
  return (
    <InputCheckboxList
      id="agree"
      text="약관 전체 동의"
      checked={isAllChecked}
      checks={termsAgreements}
      handleAgreement={handleAgreement}
      handleAllAgreement={handleAllAgreement}
    />
  );
}

function generateInitialValues(terms: Term[]) {
  return terms.map((term) => ({ ...term, checked: false }));
}
