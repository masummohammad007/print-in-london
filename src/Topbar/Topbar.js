import React from 'react';
import './Topbar.css';

const Topbar = () => {
    return (
<div className="bg-custom">
<div className="container d-flex justify-content-space-between pt-2 pb-2">
   <div>
     <small className="text-white"> <i class="far fa-clock"></i> OPEN 24 HOURS 7 DAYS A WEEK (INCLUDING BANK HOLIDAYS)</small>
   </div>
   <div>
    <small className="text-white d-inline-block pr-3"><i class="fas fa-phone-alt"></i>  +224565788</small>
   <small className="text-white custom-space" ><i class="fas fa-envelope"></i>   Example@gmail.com</small>
   </div>
</div>
</div>
    );
};

export default Topbar;