interface Salary {
  salaryType: string;
  salaryFrom?: string;
  salaryTo?: string;
  salaryCurrency?: string;
}

export interface DropdownProps {
  label: string;
  value: string;
}

export const getSalary = (salary: Salary) => {
  if (salary.salaryType === 'AGREE') {
    return 'Negotiable salary';
  }
  if (salary.salaryType === 'FROM_TO' && salary.salaryFrom) {
    const salaryFrom = Number(
      salary.salaryFrom?.replace('.', ''),
    ).toLocaleString('it-IT', {
      style: 'currency',
      currency: salary.salaryCurrency,
    });
    const salaryTo = Number(salary.salaryTo?.replace('.', '')).toLocaleString(
      'it-IT',
      {
        style: 'currency',
        currency: salary.salaryCurrency,
      },
    );
    return `${salaryFrom} - ${salaryTo}`;
  }
  return '';
};

export const getDatatLabel = (
  DataDefault: DropdownProps[],
  dataValue: string[],
): string => {
  let labelCareer = '';
  for (let i = 0; i < DataDefault.length; i++) {
    for (let j = 0; j < dataValue.length; j++) {
      if (DataDefault[i].value === dataValue[j]) {
        labelCareer += DataDefault[i].label + ', ';
      }
    }
  }
  labelCareer = labelCareer.substring(0, labelCareer.length - 2);
  return labelCareer;
};
