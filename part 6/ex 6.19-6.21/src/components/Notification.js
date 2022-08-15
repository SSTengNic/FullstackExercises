import { useSelector } from "react-redux/es/exports"
import { connect } from "react-redux"

const Notification = (props) => {
  const notification = props.notification
  console.log('Notification', notification)
  const style = {
    border: 'solid',
    padding: 10,
    borderWidth: 1
  }
  return (
    <div style={style}>
      {notification}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    notification: state.notification
  }
}
export default connect(mapStateToProps, null)(Notification)