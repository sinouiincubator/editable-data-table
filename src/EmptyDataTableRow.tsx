import React from 'react';
import styled from 'sinoui-components/styles';

interface Props {
  /**
   * 数据表格的列数
   */
  columns: number;
}

const Wrapper = styled.div`
  text-align: center;
  padding: 32px 8px;
`;

/**
 * 表格空数据时显示的行
 */
const EmptyDataTableRow: React.SFC<Props> = (props) => {
  const { children } = props;
  return <Wrapper className="sinoui-data-table-info">{children}</Wrapper>;
};

export default EmptyDataTableRow;
