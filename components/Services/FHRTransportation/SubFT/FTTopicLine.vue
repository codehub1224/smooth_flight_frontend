<template>
  <div class="page-header">
    <div class="header-content">
      <h1 class="page-title">Hotel & Transportation</h1>
      <div class="breadcrumb-container">
        <ul class="breadcrumb">
          <li class="breadcrumb-item active">Smooth Flight Support</li>
          <li class="breadcrumb-item">Services</li>
          <li class="breadcrumb-item">Hotel & Transportation</li>
        </ul>
      </div>
    </div>
    <div class="header-background"></div>
  </div>
</template>

<script>
export default {
  name: 'HotelTransportationHeader'
}
</script>

<style scoped>
.page-header {
  position: relative;
  width: 100%;
  overflow: hidden;
}

.header-content {
  position: relative;
  z-index: 2;
  padding: 80px 5% 40px;
}

.page-title {
  font-family: 'Barlow-ExtraBold', sans-serif;
  font-size: 3.5rem;
  font-weight: 800;
  color: #183862;
  margin-bottom: 20px;
  text-transform: uppercase;
  position: relative;
}

.page-title::after {
  content: '';
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 80px;
  height: 4px;
  background: #88c607;
  border-radius: 2px;
}

.breadcrumb-container {
  border: 1px solid #e5e7eb;
  border-radius: 8px;
  display: inline-block;
  padding: 0;
  background: white;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
}

.breadcrumb {
  display: flex;
  list-style-type: none;
  padding: 0;
  margin: 0;
  overflow: hidden;
}

.breadcrumb-item {
  color: #183862;
  position: relative;
  padding: 12px 20px;
  font-weight: 500;
  font-size: 0.95rem;
  display: flex;
  align-items: center;
}

.breadcrumb-item:not(:last-child)::after {
  content: '';
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 6px 0 6px 6px;
  border-color: transparent transparent transparent #e5e7eb;
}

.breadcrumb-item.active {
  font-weight: 600;
}

.header-background {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #f0f0f0;
  z-index: 1;
}

@media only screen and (max-width: 1024px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .header-content {
    padding: 60px 5% 30px;
  }
}

@media only screen and (max-width: 768px) {
  .page-title {
    font-size: 2rem;
  }
  
  .breadcrumb-item {
    padding: 10px 15px;
    font-size: 0.85rem;
  }
}

@media only screen and (max-width: 500px) {
  .page-title {
    font-size: 1.75rem;
  }
  
  .header-content {
    padding: 40px 5% 20px;
  }
  
  .breadcrumb-container {
    display: none;
  }
}
</style>