interface Salary {
  salaryType: string;
  salaryFrom?: string;
  salaryTo?: string;
  salaryCurrency?: string;
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
