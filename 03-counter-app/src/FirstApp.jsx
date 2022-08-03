import PropTypes from 'prop-types'
export default function FirstApp ({ title, subtitle }) {
  return (
    <>
      <h1> {title} </h1>
      <p>{subtitle}</p>

    </>
  )
}

// just propTypes
FirstApp.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired
}

FirstApp.defaultProps = {
  title: 'No hay tilulo',
  subtitle: 'No hay subtitulo'
}
