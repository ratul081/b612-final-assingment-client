import React from "react";
import { Link } from "react-router-dom";

const MyProductCard = ({
  myProduct,
  handleAddProductAdvertised,
  handleDeleteProductAdvertised,
}) => {
  const {
    product_name,
    product_category,
    product_description,
    product_resale_price,
    product_image,
    product_postdate,
    product_sold,
    _id,
  } = myProduct;
  return (
    <div className=" bg-white border border-gray-200 rounded-lg shadow">
      <>
        <img
          className="rounded-t-lg h-64 w-full object-cover"
          src={product_image}
          alt={product_name}
        />
      </>
      <div className="p-5">
        <Link to={`/products/${_id}`}>
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 ">
            {product_name}
          </h5>
        </Link>
        <div className="mb-3 font-normal  text-gray-700">
          {product_description}
        </div>
        <div className="space-x-4">
          <button
            onClick={() => handleAddProductAdvertised(myProduct?._id)}
            className={`col-span-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg ${
              myProduct?.ad && "btn-disabled bg-gray-400"
            }`}>
            Put on ad
          </button>
          <button
            onClick={() => handleDeleteProductAdvertised(myProduct?._id)}
            className={`col-span-2 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-red-700 rounded-lg `}>
            Delete
          </button>
          <div className="flex justify-end h-10">
            {product_sold ? (
              <>
                <img
                  className="h-14 w-14"
                  src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFLklEQVR4nO2Ze2iWVRzHP5u2cui8tVVmNN/MWWEXlyiZ2j+2WhdokdEqI7pvWfZXxTJWEoxlf0RSEWUXCywSQ7q4oG3ZhcoiKpoSbdVf858ga3aZm2/84HvgcHied8+7Pa++wvuFw/M85/I75/ec3+38DpRQQglHA9OAyoh6q5vKMYLzgUHgd+BJ4GqVTarbD5xLkWEWsAzIAPXAE8DfwH9AP5ANSr/ahoBHxXRGNIzWUUEZ8EXEYvcCS9W+BFirskR1FwE/R4wzWtZ+xHGvFtAFdAAbgAagPMHYScCVwEaN7RKtVo4gKrXoEYmKKbaPxcBCvTcDXwMVUvKtQF0EzSpgQDQfiTEUqeEy4CPgoP7ej0Ct2myRx+ndFr5D7yuAZyUyNRqzSm3PA2s8+kZrr2gf1Fy2w6mjGzikZ4v+ssOArJJhLlCdgN5O4A69T5dIVki8/LlSRaX+UncgDvaXDTcCi7y2OfrbjwObVR5T3SkBbdvJP4EHg/puWbcpaTKyQVtuO+HwBvCt923icy3wCXA4wiq5MgrsBpo8K3VrhO60qn9bGgyUyTqNSL59cTKndrHeTbk/18T/Au8CtwPLgXkqyyVK76mP9f0MWODRbBadyZqrT3O3TMQ0z/L8RL+n2CHMjP6lP70FODUBbevzssaYWF2h+tXAi96ia6V/zs+My2kuFYFdESbWZ2IYOABcOo45GjR22GMmRJXnZ2xNecEc1n0avEdOKyyd+ptZiVJHTHHiN99zeOVS7g6NzYpWZwyNPeqzTmtLjK05lDXf8pJoGhN/ACcAJ3l6km95NSkTNRrQI0uSmUCZF4QsxoTDzDxp1QG9WlsSP8U56mxxUByqFe3Wq38I++OnRdTPyTGn0Zo/Rqy2UWs7ewwexmTErMlzEdtt/sOFKju9+t1iCulKNsIoNAe0vhNTBWVktdo+lbJaWQ/MUPtTan9bptje31Rbk75vCmiuV73FXpulO/sVthSMkdvUdn3M2B901nB+oFfmNQkjK/V9v75vKCQjtYp//tGCdynCdfhNptJhu2jlw8gKfT9QSEbcRB+KkWEFk6cfi4z4WKu+FvTFiZb5jqITrZma2Cn6V+rrxGuTvrcrlrL3bQEj2zR2ZQ5lH1RoUjBGrgtM5WFZKjzzu8Nr/9g7szjzm/UsX5z5XRyztlRFyzmv+hwetkYnxRBnemOrImiekaZDdCFKbwohSpqlTmsyKTiRhHgtxaAx7bKFPDBJIXMaYfxYJZ8wvjXfMN4/WHXFWBB0GHIHq4ZxppgOKI3aWIiDVXjU/UUhOVLGF4BL9N2ov2nH1lcSHnXn6lwxKkYuj+mXAX6d6FEXObYWJQD6lBCYrK02s+mwQOY0Kz/wPnCnTK5LPtj7XcAH2oGsMi5myVD7WR7N44F9mvvutPLCbRHpIGQub/aYbpLvGM2hrKOyPtcEi/seeN37djr6MCliSkSCzvCQMii2Sz5OlvNsB55RaVedtTksUh0SyeleW48CVP9UmQpcGrNHua4KWZDZXoj/VgI6s72T4tNKNfnitE5zHFL+N3U0iPCQtrwvyHWt8Wz8KgWQ1d6p0mVT3gG+9NKlMzzF3ifaQ4VMYvti1iYlHIjJeS2UvE/Tzn3jRbMWXlwYYWLNMo5IJ1IXp1xo8fxMh+KgxoQXPeUyue3BRc89FNHV20+6EyyTA7tFxV3HLVOforl6Cy9DL9DVwVDCy9B2jcmISTvrFBXO866nLXa6SqVTdYPFeD0dh6kxFzSVhb4fLKGEEojE/4baEghgdEWgAAAAAElFTkSuQmCC"></img>
              </>
            ) : (
              <>
                <img src="data:image/png;base64,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"></img>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MyProductCard;
