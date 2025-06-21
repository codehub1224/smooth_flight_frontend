<template>
  <div class="career-page">
    <div class="content-wrapper">
      <div class="image-section">
        <img class="banner-image" src="\CompanyI\Careers\Carrer.jpg" alt="Company Banner">

      </div>
      <div class="text-section">
        <h1>Join Our Team</h1>
        <p>Smooth Flight Support, excellence is our journey, guided by core values of quality,
          integrity, professionalism, confidentiality, and compliance. These aren't just ideals but the essence of our
          team.
          If you're a driven individual seeking a rewarding career, consider joining us.
          We offer a chance to be part of a global team united by shared values and goals.
          If you see these qualities in yourself, supported by your professional background, we invite you to apply.
          Join us in a place where excellence flourishes and your efforts are recognized and appreciated.
          Please don’t hesitate to send your CV and cover letter.</p>

          <input type="file" ref="fileInput" class="fileInput" @change="handleFileUpload" />
       
          <li v-for="(file, index) in files" :key="index" class="file-item">
            <span class="file-name">{{ file.name }}</span>
            <button @click="removeFile(index)" class="btnattach">Remove</button>
          </li>
        
        <button @click="uploadPdf" class="btnSubmit" type="button">
          Apply Now
          <font-awesome-icon :icon="['fas', 'arrow-right']" />
        </button>

      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      files: [],
    };
  },
  methods: {
    handleFileUpload(event) {
      const fileList = event.target.files;
      this.files = Array.from(fileList);
    },
    removeFile(index) {
      this.files.splice(index, 1);
    },
    async uploadPdf() {
  if (this.files.length === 0) {
    alert('Please select a file to upload.');
    return;
  }

  const formData = new FormData();
  this.files.forEach((file, index) => {
    formData.append(`file${index}`, file);
  });

  try {
    const response = await this.$axios.post('/api/upload', formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });

    console.log('Server Response:', response.data);
    alert('Thank you..! Your message has been successfully submitted.. ');
  } catch (error) {
    console.error('Error uploading files:', error);
    alert('Failed to upload files.');
  }
}
  }}

</script>

<style scoped>
.career-page {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  min-height: 70vh;
  background: #f0f0f0;
  /* Light background */
  padding: 20px;
  box-sizing: border-box;
}

.content-wrapper {
  display: flex;
  flex-direction: column;
  background: white;
  border-radius: 10px;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.1);
  max-width: 1400px;
  width: 100%;
  overflow: hidden;

}

.image-section {
  width: 100%;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  padding: 20px;
  box-sizing: border-box;
}

.banner-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  height: 55dvh;
}

.text-section {
  padding: 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background: #fff;
  text-align: center;

}

.text-section h1 {
  font-size: 2em;
  margin-bottom: 20px;
  color: #183862;
}

.text-section p {
  font-size: 1.1em;
  line-height: 1.6;
  color: rgb(126, 125, 125);
  margin-bottom: 30px;
  text-align: justify;
}

.btnSubmit {
  background: #88c607;
  color: white;
  border: none;
  padding: 15px 25px;
  font-size: 15px;
  border-radius: 5px;
  cursor: pointer;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  text-transform: uppercase;
  transition: background-color 0.3s ease;
  margin-left: 75%;
  position: relative;
  z-index: 1;

}

.btnSubmit::after {
  border-radius: 6px;
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #183862;
  z-index: -1;
  transform: scale(0);
  transform-origin: bottom right;
  transition: transform 200ms ease-in;
}

.btnSubmit:hover::after {
  transform: scale(1);
  transform-origin: top left;
}

@media (min-width: 768px) {
  .content-wrapper {
    flex-direction: row;
  }

  .image-section,
  .text-section {
    flex: 1;
  }

  .text-section {
    text-align: left;
    /* Left-align text on larger screens */
    padding: 40px;
  }

  .btn-submit {
    align-self: flex-start;
    /* Align button to start on larger screens */
  }

}

.btnattach {
  width: 100px;
  text-align: center;
  background-color: #183862;
  border: 1px solid #ccc;
  padding: 5px 20px;
  cursor: pointer;
  font-size: 14px;
  color: white;
  margin-left: 10%;
  border-radius: 5px;
}

.file-item {
  margin-top: 1%;
}

@media only screen and (min-width: 600px) and (max-width: 1024px) {
  .btnSubmit {
    background: #88c607;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    margin-left: 60%;
    position: relative;
    z-index: 1;
  }
}

@media only screen and (min-width: 1025px) and (max-width: 1280px) {
  .btnSubmit {
    background: #88c607;
    color: white;
    border: none;
    padding: 12px 25px;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    margin-left: 70%;
    position: relative;
    z-index: 1;
  }

}

@media only screen and (min-width: 1281px) and (max-width: 1366px) {
  .btnSubmit {
    background: #88c607;
    color: white;
    border: none;
    padding: 15px 25px;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    margin-left: 70%;
    position: relative;
    z-index: 1;
  }
  .banner-image {
  width: 100%;
  height: auto;
  object-fit: cover;
  
  height: 65dvh;
}
.text-section p {
  font-size: 17px;
  line-height: 1.6;
  color: rgb(126, 125, 125);
  margin-bottom: 30px;
  text-align: justify;
}
}

@media only screen and (min-width: 1367px) and (max-width: 1440px) {
  .btnSubmit {
    background: #88c607;
    color: white;
    border: none;
    padding: 15px 25px;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    margin-left: 70%;
    position: relative;
    z-index: 1;
  }
}

@media only screen and (min-width: 1441px) and (max-width: 1600px) {
  .btnSubmit {
    background: #88c607;
    color: white;
    border: none;
    padding: 15px 25px;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    margin-left: 70%;
    position: relative;
    z-index: 1;
  }

  .banner-image {
    width: 100%;
    height: auto;
    object-fit: cover;
 
    height: 65dvh;
  }
}

@media only screen and (min-width: 1601px) and (max-width: 1800px) {
  .btnSubmit {
    background: #88c607;
    color: white;
    border: none;
    padding: 15px 25px;
    font-size: 15px;
    border-radius: 5px;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    gap: 8px;
    text-transform: uppercase;
    transition: background-color 0.3s ease;
    margin-left: 70%;
    position: relative;
    z-index: 1;
  }

}

@media only screen and (max-width: 500px) {
  .classB {
    display: block;
    padding: 2.5%;
  }

  .imgClass {
    width: 100%;
    height: 100%;

  }

  .img {

    display: none;
    /* width: 80dvw;
    height: 25dvh;
    margin-left: 8%; */



  }

  .txtClass {
    width: 100%;
    height: 100%;
    padding-top: 1.5%;
    padding-bottom: 1.5%;
    padding-left: 2%;
    padding-right: 2%;
    margin-left: 0;
    margin-top: 1.5%;
  }



  p {
    font-size: 17px;
    text-align: justify;
    margin-left: 3%;
    padding-right: 3%;
  }

  .cvSection {
    padding-right: 5%;
    padding-bottom: 1.5%;
  }

  .cvCard {
    display: flex;
    justify-content: space-between;
    width: 100%;
    height: 100%;
    padding: 30px;
    background-color: rgb(255, 255, 255);
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.849);
    /* border: 2px solid black; */
  }

  .listA {
    font-size: 16px;
  }

  .listB {
    font-size: 12px;
  }

  .downloadIcon {
    font-size: 35px;
  }

  .uploadPart {
    padding-top: 5%;
    padding-bottom: 5%;
    width: 100%;
    /* background-color: yellow; */
  }

  .fileN {
    /* background-color: blue; */
    width: 60svw;
  }

  .btnSubmit {
    text-decoration: none;
    border-radius: 6px;
    font-weight: 600;
    font-size: 14px;
    padding: 15px 35px;
    cursor: pointer;
    position: relative;
    display: inline-flex;
    background: #88c607;
    color: white;
    z-index: 1;
    margin-left: 3%;
    margin-top: 5%;
  }

}
</style>