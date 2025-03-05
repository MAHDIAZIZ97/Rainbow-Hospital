import React from 'react'

const ChangePassword = () => {
  return (
    <form>
      <label>
        Old Password:
        <input type="password" name="oldPassword" />
      </label>
      <br />
      <label>
        New Password:
        <input type="password" name="newPassword" />
      </label>
      <br />
      <label>
        Confirm Password:
        <input type="password" name="confirmPassword" />
      </label>
      <br />
      <input type="submit" value="Change Password" />
    </form>
  )
}

export default ChangePassword
