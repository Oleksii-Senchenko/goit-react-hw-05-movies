
import React from 'react'
import { Blocks } from 'react-loader-spinner'


import { LoaderWrapper } from './Loader.styled'





const Loader = () => {
    return (

        <LoaderWrapper>
            < Blocks
                visible={true}
                height="100"
                width="100"
                ariaLabel="blocks-loading"
                wrapperStyle={{}}
                wrapperClass="blocks-wrapper"
            />
        </LoaderWrapper>
    )
}

export default Loader

