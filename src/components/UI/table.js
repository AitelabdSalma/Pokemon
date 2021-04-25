import React from "react";
import { Table, Pagination } from "antd";
import styled from "styled-components";

export const Tableau = ({
    columns,
    data,
    loading,
    total,
    current,
    onChange,
    rowSelection,
    onChangeSelect,
    selectedRowKeys,
    expandedRowRender,
    className,
    scroll
}) => {
    return (
        <TableStyled>
            <Table
                rowSelection={
                    rowSelection
                        ? {
                            type: "checkbox",
                            onChange: onChangeSelect,
                            selectedRowKeys: selectedRowKeys
                        }
                        : false
                }
                columns={columns}
                className={className}
                dataSource={data}
                expandedRowRender={expandedRowRender}
                loading={loading}
                pagination={false}
                scroll={scroll}
            />
            <PaginationStyled
                current={current}
                onChange={onChange}
                total={total}
                hideOnSinglePage
            />
        </TableStyled >
    );
};


const TableStyled = styled.div`
  float: left;
  width: 100%;
  margin-bottom: 25px;
  .ant-table-content {
    background: #fff;
    border-radius: 15px !important;
    overflow: hidden;
    box-shadow: 0 0 17px -3px rgba(0, 0, 0, 0.2);
  }
  table {
    thead {
      tr {
        th {
          background: transparent;
          color: #006f6e;
          font-weight: 700;
          font-size: 15px;
          border-right: 2px solid #e6e6e6;
          text-align: center;
          &:last-child {
            border-right: none;
          }
        }
      }
    }
    tbody {
      tr {
        td {
          padding: 11px 16px;
          color: #646678;
          font-weight: 600;
          text-align: center;
          border-right: 2px solid #e6e6e6;
          &:last-child {
            border-right: none;
          }
          .icon {
            width: 30px;
            height: 30px;
            display: inline-block;
            border-radius: 40px;
            text-align: center;
            line-height: 32px;
            background: #008991;
            color: #fff;
            font-size: 17px;
            a {
              color: #fff;
            }
            .anticon {
              color: #fff;
            }
          }
          .anticon {
            font-size: 18px;
            margin: 0 4px;
            color: #008991;
          }
        }
      }
    }
  }
`;

const PaginationStyled = styled(props => <Pagination {...props} />)`
  float: left;
  width: 100%;
  margin-top: 20px !important;
  text-align: center;
  li {
    margin: 0;
  }
`;
