// ApplicationList.js
import React from 'react';
import PdfLogo from '../images/pdf-logo.svg';
import ProfileImage from '../images/profil.jpeg';

const ApplicationCard = ({ name, email, cvUrl, status, jobTitle, field, applicationDate, index }) => (
    <div className="application-card"  style={styles.applicationCard}>
        <div className='app-left' style={styles.appLeft}>
           <div className='image-container' style={styles.imageContainer}>
             <img src={ProfileImage} alt="Profile" className='profile-img1' style={styles.profileImg1} />
            </div>
        </div>
        <div className='app-details' style={styles.appDetails}>
            <div  style={styles.detailDiv}>
                <span className='detail-label' style={styles.detailLabel}>Full Name</span> : {name}
            </div>
            <div style={styles.detailDiv}>
                <span className='detail-label' style={styles.detailLabel}>E-mail</span>  :  {email}
            </div>
            <div style={styles.detailDiv}>
              <span className='detail-label' style={styles.detailLabel}>View CV: </span>
                  <a href={cvUrl} target="_blank" rel="noopener noreferrer" className='cv-link' style={styles.cvLink}>

                   {cvUrl.split("/").pop()}
                  <img src={PdfLogo} alt="PDF" className='pdf-logo' style={styles.pdfLogo} />
                    </a>

             </div>
            <div style={styles.detailDiv}>
                <span className='detail-label' style={styles.detailLabel}>Status</span> : {status}
            </div>
        </div>
        <div className='app-details' style={styles.appDetails}>
            <div style={styles.detailDiv}>
                <span className='detail-label' style={styles.detailLabel}>Job Title</span> : {jobTitle}
            </div>
            <div style={styles.detailDiv}>
                <span className='detail-label' style={styles.detailLabel}>Field</span> : {field}
            </div>

            <div style={styles.detailDiv}>
                <span className='detail-label' style={styles.detailLabel}>Application Date</span> : {applicationDate}
            </div>
        </div>
        <div className='app-right-actions' style={styles.appRightActions}>
            <button className="button accept" style={{...styles.button, ...styles.acceptButton}}>Accept</button>
            <button className="button reject" style={{...styles.button, ...styles.rejectButton}}>Reject</button>

        </div>
    </div>
);


const ApplicationList = () => {
    const applications = [
       {
           id: 1,
        name: 'JOHN JACK',
        email: 'johnjack66@gmail.com',
        cvUrl: 'johnjack_cv.pdf',
        status: 'IN PROGRESS',
         jobTitle: 'Sound Eng.',
        field: 'Game Development',
        applicationDate: '12/02/2024',
    },
      {
        id: 2,
         name: 'JOHN JACK',
          email: 'johnjack66@gmail.com',
          cvUrl: 'johnjack_cv.pdf',
        status: 'IN PROGRESS',
          jobTitle: 'Sound Eng.',
          field: 'Game Development',
          applicationDate: '12/02/2024',
      },
        {
            id: 3,
         name: 'JOHN JACK',
          email: 'johnjack66@gmail.com',
          cvUrl: 'johnjack_cv.pdf',
        status: 'IN PROGRESS',
           jobTitle: 'Sound Eng.',
          field: 'Game Development',
            applicationDate: '12/02/2024',

        }
  ];



  return (

     <div style={{...styles.mainContainer, backgroundColor : '#F0F8FF'}} >
          <div className="filters-container" style={styles.filtersContainer}>
              <div className="search-box" style={styles.searchBox}>
                  <input placeholder="Search by Job Id, Job Title" type="text"  style={styles.searchInput}/>
                 <button className="search-button" style={styles.searchButton}>Search</button>
              </div>
               <div className='filter-inputs-cont' style={styles.filterInputsCont}>
                 <select style={styles.select}>
                       <option value="Job Id">Job Id</option>
                     <option>Job 1</option>
                         <option>Job 2</option>

                  </select>
                   <select style={styles.select}>
                      <option>Job Title</option>
                      <option>Engineer</option>
                       <option>Accountant</option>
                  </select>
                  <select style={styles.select}>
                      <option>Status</option>
                      <option>In progress</option>
                       <option>Approved</option>
                  </select>
                    <select style={styles.select}>
                      <option>Field</option>
                         <option>Data science</option>
                        <option>Game Dev</option>
                    </select>
              </div>
          </div>

        <div className="application-list" style={styles.applicationList}>
              {applications.map((app, index) => (
                  <ApplicationCard key={app.id} {...app} index={index} />
               ))}
         </div>
           <div style={{ display: 'flex', justifyContent: 'center' }}>  <button className="show-more-btn" style={styles.showMoreButton}>Show More</button></div>
      </div>

 );
};

const styles = {
    mainContainer : {
         backgroundColor : '#F0F8FF' ,
          minHeight : '100vh',
            paddingBottom : '20px',


    },
    applicationList: {
        display: 'flex',
        flexDirection: 'column',
        padding: '15px',
    },
    applicationCard: {
        margin: '10px 15px',
        border: '1px solid #57a5dd',
        padding: '10px',
        display: 'flex',
        borderRadius: '8px',
        justifyContent: 'space-between',
        alignItems: 'center',
         backgroundColor : '#f8f9fa',
         flexWrap : 'wrap',

         '@media (max-width: 768px)': {
            flexDirection: 'column',
            alignItems: 'flex-start',
           },
    },
    appLeft : {
        marginRight : '20px',
           '@media (max-width: 768px)': {
            marginRight: '0px',
            marginBottom: '10px',
           },
    },
    appDetails: {
        display: 'flex',
        flexDirection: 'column',
        padding: '5px',
        fontSize: '15px',
        marginBottom: '5px',
    },
   detailDiv:{
      marginBottom : '5px',
   },
    detailLabel: {
        fontWeight: 'bold',
        color: '#212529',
        marginRight: '5px',
        color: '#1791DA',
    },
    button: {
        padding: '8px 15px',
        border: 'none',
        cursor: 'pointer',
        borderRadius: '5px',
        fontSize: '14px',
        fontFamily : 'sans-serif',
    },
    rejectButton: {
        background: '#dc3545',
        color: 'white',
    },
    acceptButton: {
        background: '#28a745',
       color : 'white',
    },
    filtersContainer: {
        margin:  '0px',
        background: '#f0f7ff',
        display : 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '10px',
          '@media (max-width: 768px)': {
             flexDirection: 'column',

         },
    },
    filterInputsCont: {
        display: 'flex',
        margin: '10px',
       justifyContent: 'space-around',
      gap: '10px',
        '@media (max-width: 768px)': {
            flexDirection: 'column',
            gap : '5px',
        },
    },
     select: {
          border: '1px solid #57a5dd',
           borderRadius : '4px',
            padding: '5px 8px',
          background: '#fff',
          fontSize: '14px',
          fontFamily : 'sans-serif',
        '@media (max-width: 768px)': {
           width: '100%',
        },
    },
     searchBox: {
            display: 'flex',
           alignItems: 'center',
        },
     searchInput: {
            border: '1px solid #57a5dd',
            padding: '7px 15px',
            borderRadius: '5px',
          fontSize: '14px',
          fontFamily : 'sans-serif',
      },
      searchButton:{
           border: 'none',
           background: '#0d6efd',
          padding: '7px 15px',
           borderRadius: '5px',
           margin: '5px',
          color: 'white',
         fontSize: '14px',
          fontFamily : 'sans-serif',
      },
      showMoreButton : {
            border: 'none',
            padding: '10px',
           cursor: 'pointer',
            background: '#0d6efd',
          borderRadius: '4px',
            color: 'white',
         fontSize: '14px',
           fontFamily: 'sans-serif',
      },
      imageContainer:{
             width: '100px',
             height: '100px',
              borderRadius: '50%',
          background: '#ddd',
            display : 'flex',
             alignItems: 'center',
             justifyContent: 'center',
      },
    appRightActions:{
         display: 'flex',
       flexDirection: 'row',
      justifyContent: 'space-between',
       alignItems: 'center',
         padding: '15px',
        gap: '8px',
          '@media (max-width: 768px)': {
                padding: '5px',
              flexDirection: 'row',
              justifyContent : 'flex-end',
               marginTop : '10px',
            },
    },
    pdfLogo: {
     width:'15px',
        marginLeft : '2px',
        marginBottom : '2px',
    },
    cvLink:{


     alignItems : 'center',
       textDecoration:'none',
          color: '1791DA',
    },
     profileImg1 : {
         width :'100%',
         height:'auto',
     }

};


export default ApplicationList;