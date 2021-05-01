import { LightningElement, api } from "lwc";

export default class ResponsiveDatatable extends LightningElement {
	reformatRows = function (rowData) {
		const colItems = this.columnConfig;
		const reformattedRows = [];

		for (let i = 0; i < rowData.length; i++) {
			const rowDataItems = [];
			for (let j = 0; j < colItems.length; j++) {
				let colClass = "";
				if (colItems[j].hiddenOnMobile) {
					colClass = "hiddenOnMobile";
				}
				rowDataItems.push({
					value: rowData[i][colItems[j].fieldName],
					label: colItems[j].label,
					type: colItems[j].type,
					class: colClass,
					columnId: "col" + j + "-" + rowData[i][this.pkField],
					isPhone: colItems[j].type === "phone",
					isEmail: colItems[j].type === "email",
					isOther: colItems[j].type !== "phone" && colItems[j].type !== "email"
				});
			}
			reformattedRows.push({
				data: rowDataItems,
				pk: rowData[i][this.pkField]
			});
		}
		return reformattedRows;
	};
}
