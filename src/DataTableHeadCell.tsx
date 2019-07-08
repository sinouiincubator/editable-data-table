import React from 'react';
import classNames from 'classnames';

interface Props {
  order?: boolean;
  title: React.ReactNode;
}

/**
 * 表格头单元格
 */
function DataTableHeadCell(props: Props) {
  const { order, title } = props;
  return (
    <th
      className={classNames('sinoui-data-table-head', {
        // eslint-disable-next-line @typescript-eslint/camelcase
        align_center: order,
      })}
    >
      {title}
    </th>
  );
}

export default DataTableHeadCell;
