import styled, { css } from 'sinoui-components/styles';
import Table from 'sinoui-components/Table';

const captionTypeStyle = css`
  font-size: ${(props) => props.theme.typography.body1.fontSize}rem;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-weight: ${(props) => props.theme.typography.fontWeightMedium};
  color: ${(props) => props.theme.typography.body1.color};
`;

const bodyTypeStyle = css`
  font-size: ${(props) => props.theme.typography.body1.fontSize}rem;
  font-family: ${(props) => props.theme.typography.fontFamily};
  font-weight: ${(props) => props.theme.typography.body1.fontWeight};
  color: ${(props) => props.theme.typography.body1.color};
`;

const dataTableCellStyle = css`
  padding: 0;
  padding-left: 8px;
  padding-right: 8px;
  border-bottom: 1px solid
    ${(props) =>
      props.theme.palette.type === 'light'
        ? 'rgba(224, 224, 224, 1)'
        : 'rgba(80, 80, 80, 1)'};
`;

const rowBgColor = {
  light: {
    tableRowSelected: 'rgba(0, 0, 0, 0.04)', // 表格行选中时的背景色
    tableRowHover: 'rgba(0, 0, 0, 0.07)', // 表格行hover时的背景色
  },
  dark: {
    tableRowSelected: 'rgba(255, 255, 255, 0.08)', // 表格行选中时的背景色
    tableRowHover: 'rgba(255, 255, 255, 0.14)', // 表格行hover时的背景色
  },
};

const StyledTable = styled(Table)`
  table-layout: fixed;
  border-top: 1px solid rgba(224, 224, 224, 1);
  & .sinoui-data-table-head {
    ${captionTypeStyle};
    ${dataTableCellStyle};
    background-color: ${(props) =>
      props.theme.palette.type === 'light'
        ? props.theme.palette.primary[50]
        : props.theme.palette.primary[200]};
    text-align: left;
    vertical-align: middle;
  }

  .sinoui-checkbox-button {
    margin: 14px;
  }

  & .sinoui-data-table-head.numeric,
  .sinoui-data-table-body-td.numeric {
    text-align: right;
    flex-direction: row-reverse;
  }

  & .sinoui-data-table-head.align_center,
  .sinoui-data-table-body-td.align_center {
    text-align: center;
  }

  & .sinoui-data-table-head.checkbox,
  .sinoui-data-table-body-td.checkbox {
    padding: 0;
    width: 48px;
  }

  & .sinoui-data-table-head.extraInfo,
  .sinoui-data-table-body-td.extraInfo {
    padding: 0;
    width: 60px;
  }

  & .sinoui-data-table-head:last-child,
  .sinoui-data-table-body-td:last-child {
    padding-right: 24px;
  }

  & .sinoui-data-table-footer {
    ${captionTypeStyle};
    ${dataTableCellStyle};
    padding-left: 24px;
    padding-right: 12px;
  }

  & .sinoui-data-table-body-cell-no-data {
    ${bodyTypeStyle};
    ${dataTableCellStyle};
    padding: 64px;
    text-align: center;
    color: ${(props) => props.theme.typography.caption.color};
  }

  & .sinoui-data-table-body-td {
    ${bodyTypeStyle};
    ${dataTableCellStyle};
    text-align: left;
    vertical-align: middle;
    word-wrap: break-word;
    word-break: break-all;
  }

  & .sinoui-data-table-head-row {
    height: 48px;
  }

  & .sinoui-data-table-footer-row,
  .sinoui-data-table-body-row-no-data {
    height: 56px;
    background-color: transparent;
  }

  & .sinoui-data-table-body-row {
    height: 48px;
    background-color: transparent;

    &:hover {
      background-color: ${(props) =>
        rowBgColor[props.theme.palette.type].tableRowHover};
    }
  }

  & .sinoui-data-table-body-row.selected {
    background-color: ${(props) =>
      rowBgColor[props.theme.palette.type].tableRowSelected};
  }
`;

export default StyledTable;
