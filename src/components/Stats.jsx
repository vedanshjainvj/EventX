import React, { useEffect, useState } from 'react';
import './CardsGallery.css'

const Stats = () => {
  return (
    <div id="mainContainerrr">
      <div className="margin-body">
        <div>
          <div className="starsec"></div>
          <div className="starthird"></div>
          <div className="starfourth"></div>
          <div className="starfifth"></div>
        </div>

        <div className="row">
          <div className="col-sm-12 col-md-12">
            <div className=" wpb_text_column wpb_content_element ">
              <div className="wpb_wrapper">
                <div className="title-h1 text-center"><span><span className="light">pricing </span> table</span></div>
              </div>
            </div>
          </div>
        </div>

        <div className="row grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">
          <PricingColumn cost="$10" time="Per Month" title="tiny" rows={['Photo sharing school', 'Drop out ramen hustle', 'Crush revenue traction', 'Crush revenue traction', 'User base minimum viable', 'Lorem ipsum dolor']} buttonColor="gem-green" />

          <PricingColumn cost="$45" time="Per Month" title="small" rows={['Photo sharing school', 'Drop out ramen hustle', 'Crush revenue traction', 'Crush revenue traction', 'User base minimum viable', 'Lorem ipsum dolor']} buttonColor="gem-purple" />

          <PricingColumn cost="$99" time="Per Month" title="medium" rows={['Photo sharing school', 'Drop out ramen hustle', 'Crush revenue traction', 'Crush revenue traction', 'User base minimum viable', 'Lorem ipsum dolor']} buttonColor="gem-orange" />

          <PricingColumn cost="$145" time="Per Month" title="large" rows={['Photo sharing school', 'Drop out ramen hustle', 'Crush revenue traction', 'Crush revenue traction', 'User base minimum', 'Lorem ipsum dolor']} buttonColor="gem-yellow" />
        </div>
      </div>
    </div>
  );
};

const PricingColumn = ({ cost, time, title, rows, buttonColor }) => {
  return (
    <div className="col-sm-3 col-md-3 pricing-column-wrapper">
      <div className="pricing-column">
        <div className="pricing-price-row">
          <div className="pricing-price-wrapper">
            <div className="pricing-price">
              <div className="pricing-cost">{cost}</div>
              <div className="time">{time}</div>
            </div>
          </div>
        </div>
        <div className="pricing-row-title">
          <div className="pricing_row_title">{title}</div>
        </div>
        {rows.map((row, index) => (
          <figure key={index} className={`pricing-row ${row.includes('strike') ? 'strike' : ''}`}>
            {row.replace('strike', '')}
          </figure>
        ))}
        <div className="pricing-footer">
          <div className={`gem-button-container gem-button-position-center`}>
            <a href="#" className={`gem-button ${buttonColor}`}>order now</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Stats;
