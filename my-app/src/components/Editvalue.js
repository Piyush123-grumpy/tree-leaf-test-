import React from 'react'

function Editvalue({editValue}) {
  return (
    <div class="container">
	<div class="table">
		<div class="table-header">
			<div class="header__item"> Name</div>
			<div class="header__item">Email</div>
			<div class="header__item"> Phone</div>
			<div class="header__item">Date of Birth</div>
			<div class="header__item">District</div>
            <div class="header__item">Province</div>
            <div class="header__item">City</div>
            <div class="header__item">Country</div>
		</div>
		<div class="table-content">	
			<div class="table-row">		
				<div class="table-data">{editValue.Name}</div>
				<div class="table-data">{editValue.Email}</div>
				<div class="table-data">{editValue.PhoneNumber}</div>
				<div class="table-data">{editValue.date}</div>
				<div class="table-data">{editValue.District}</div>
                <div class="table-data">{editValue.Province}</div>
                <div class="table-data">{editValue.City}</div>
                <div class="table-data">{editValue.Countries}</div>
			</div>
		</div>	
	</div>
</div>
  )
}

export default Editvalue