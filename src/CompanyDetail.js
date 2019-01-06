import React, { Component } from 'react'

class CompanyDetail extends Component {
    render () {
        const {
            detailData
        } = this.props

        return (
            <div>
            {
                detailData.map((data, index) => (
                    <div key={index}>
                        <h3>{data.aggravation.keyword}</h3>
                        <p>{data.relevantComments}</p>
                    </div>
                ))
            }
            </div>
        )
    }
}

export default CompanyDetail
