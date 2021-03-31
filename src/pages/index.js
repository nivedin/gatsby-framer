import React from "react"
import HomeBanner from "../components/homePage/HomeBanner"
import Layout from "../components/layout"
import {
  useGlobalDispatchContext,
  useGlobalStateContext,
} from "../context/globalContext"

const IndexPage = props => {
  const cursorStyles = useGlobalStateContext()?.cursorStyles
  const dispatch = useGlobalDispatchContext()

  const onCursor = cursorType => {
    cursorType = (cursorStyles.includes(cursorType) && cursorType) || false
    dispatch({ type: "CURSOR_TYPE", cursorType: cursorType })
  }

  return (
    <Layout>
      <HomeBanner onCursor={onCursor} />
    </Layout>
  )
}

export default IndexPage
