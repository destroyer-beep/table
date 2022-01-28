export class Render {
  createParameter(parameters, wheater) {
    const tableCol = document.querySelector('.parameters');

    tableCol.innerHTML += `
    <div class="table-row">
				<div class="temperature">
					<div class="temperature-name">
						<span>Тем. нар. воздуха</span> 
					</div>
					<div class="temperature-data">
						<span class="temperature-value text-bold">${wheater.temperatureValue}</span> 
					</div>
					<div class="temperature-measure">
						<span>&deg;С</span> 
					</div>
				</div>
			</div>

			<div class="table-row">
				<div class="speed-wind">
					<div class="speed-wind-name">
						<span>Скорость ветра</span> 
					</div>
					<div class="speed-wind-data">
						<span class="speed-wind-value text-bold">${wheater.speedWindValue}</span> 
					</div>
					<div class="speed-wind-measure">
						<span>м/с</span> 
					</div>
				</div>
			</div>
    `

    for (const item of parameters) {
      tableCol.innerHTML += `
      <div class="table-row">
				<div class="parameter">
					<div class="name">
						<span>${item.parameter}</span> 
					</div>
					<div class="measure">
						<span>${item.measure}</span> 
					</div>
				</div>
			</div>
      `
    }
  }

	createBranch(branch) {
		const table = document.querySelector('.table');

		table.innerHTML += `
		<div class="table-box">
		<div class="table-row">
				<div class="branch-name">
					${branch.name}
				</div>
			</div>
			<div class="branch-cols"  id="${branch.name}"></div>
			</div>
		`
		this.createWell(branch);
	}

	createWell(branch) {
		const branchBox = document.querySelector(`#${branch.name}`);

		for(let well of branch.wells) {
			branchBox.innerHTML += `
				<div class="branch-col">
					<div class="table-row">
						<div class="well-list">
							<div class="well-item">${well.name}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.kondensatGaz}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="p-zab list">
								<div class="p-zab item text-bold">${well.pZab}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="t-zab list">
							<div class="t-zab item text-bold">${well.tZab}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.pZatr}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.tZatr}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.tehModeOne}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.tehModeTwo}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.pUst}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.pReg}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.tReg}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.regPosition}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.debit}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.pBeforeReg}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.tBeforeReg}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.pBndr}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.tBndr}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.pKgs}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.tKgs}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.pGsk}</div>
						</div>
					</div>
					<div class="table-row">
						<div class="cond-g list">
							<div class="cond-g item text-bold">${well.tGsk}</div>
						</div>
					</div>
				</div>
			`
		}
	}
}