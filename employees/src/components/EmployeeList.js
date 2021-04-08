const Employeelist = ({ users  }) => {
  return (
    <div className='container'>
      <div
        className='doe'
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(5, 1fr)',
          gridGap: 20,
        }}>
        <div className='image-cropper'>
          <img src={users.picture} alt='avatar' className='profile-pic'></img>
        </div>
        <div className='name'>{users.name}</div>
        <div className='contact'>{users.cell}</div>
        <div className='email'>{users.email}</div>
        <div className='DOB'>{users.dob}</div>
      </div>
    </div>
  );
};

export default Employeelist;
