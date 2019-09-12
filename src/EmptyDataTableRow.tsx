import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  text-align: center;
  padding: 32px 8px;
`;

/**
 * 表格空数据时显示的行
 */
const EmptyDataTableRow: React.SFC = (props) => {
  const { children } = props;
  return (
    <Wrapper className="sinoui-data-table-info" data-testid="emptyInfo">
      {children}
    </Wrapper>
  );
};

export default EmptyDataTableRow;
