import React from 'react'
import PropTypes from 'prop-types'
import { Animated } from 'react-animated-css'
import ButtonBack from '../ButtonBack'
import styles from './layoutContainer.scss'

const LayoutContainer = ({
  name,
  title,
  children,
  handleBack,
  textButton,
  information,
  viewButtonBack,
}) => {
  return (
    <Animated
      animationIn="fadeIn"
      animationOut="fadeInUp"
      animationInDelay={1000}
      animationInDuration={300}
    >
      <div className={styles.containerLayout}>
        {viewButtonBack && <ButtonBack text={textButton} handleClick={handleBack} />}
        <div className={styles.containerTitle}>
          <div className={styles.title}>{title}</div>
          <div className={styles.name}>{name}</div>
        </div>
        <div className={styles.information}>{information}</div>
        {children}
      </div>

      <div className={styles.spaceBotton} />
    </Animated>
  )
}

LayoutContainer.propTypes = {
  children: PropTypes.node.isRequired,
  handleBack: PropTypes.func,
  title: PropTypes.string,
  information: PropTypes.string,
  textButton: PropTypes.string,
  viewButtonBack: PropTypes.bool,
}

LayoutContainer.defaultProps = {
  textButton: '',
  title: '',
  information: '',
  handleBack: null,
  viewButtonBack: false,
}

export default LayoutContainer
