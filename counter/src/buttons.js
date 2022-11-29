function SmallBox() {
    return (
      <div
        style={{
          backgroundColor: 'salmon',
          color: 'white',
          height: '100px',
          width: '100px',
        }}
      >
        Small Box
      </div>
    );
  }
  
  const BigBox = () => {
    return (
      <div
        style={{
          padding: '30px',
          backgroundColor: 'lime',
          color: 'white',
          height: '200px',
          width: '200px',
        }}
      >
        Big Box
      </div>
    );
  };
  
  // 👇️ named exports
  export {SmallBox, BigBox};