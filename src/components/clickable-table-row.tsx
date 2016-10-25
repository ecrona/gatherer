import * as React from 'react'
import { Table, TableBody, TableHeader, TableHeaderColumn, TableRow, TableRowColumn } from 'material-ui/Table'
import ArrowDownward from 'material-ui/svg-icons/navigation/arrow-downward'

import TableRowProps = __MaterialUI.Table.TableRowProps;

type ClickableTableRow = new() => React.Component<TableRowProps & {onClick: () => void}, {}>;
const ClickableTableRow = TableRow as ClickableTableRow;

export default ClickableTableRow;