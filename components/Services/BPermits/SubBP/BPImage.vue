<template>
  <div class="permits-image-container">
    <img class="permits-image" src="/ServicesImg/PermitsI/Permits.jpg" alt="Aviation Permits and Flight Clearances">
    <div class="image-overlay">
      <div class="overlay-content">
        <div class="badge">
          <font-awesome-icon :icon="['fas', 'file-alt']" class="badge-icon" />
          <span>Flight Permits</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'PermitsImage'
}
</script>

<style scoped>
.permits-image-container {
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.15);
  transition: all 0.5s ease;
}

.permits-image-container:hover {
  transform: translateY(-10px);
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.2);
}

.permits-image {
  width: 100%;
  height: 100%;
  min-height: 400px;
  object-fit: cover;
  display: block;
  transition: transform 0.5s ease;
}

.permits-image-container:hover .permits-image {
  transform: scale(1.05);
}

.image-overlay {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: linear-gradient(to top, rgba(24, 56, 98, 0.7), transparent 70%);
  display: flex;
  align-items: flex-end;
  padding: 2rem;
  opacity: 0.9;
  transition: opacity 0.3s ease;
}

.permits-image-container:hover .image-overlay {
  opacity: 1;
}

.badge {
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1.5rem;
  background: rgba(136, 198, 7, 0.9);
  color: white;
  border-radius: 50px;
  font-family: 'SourceSansPro-Regular', sans-serif;
  font-size: 1.125rem;
  font-weight: 600;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.2);
  transform: translateY(20px);
  opacity: 0;
  transition: all 0.3s ease 0.1s;
}

.permits-image-container:hover .badge {
  transform: translateY(0);
  opacity: 1;
}

.badge-icon {
  font-size: 1.25rem;
}

@media (max-width: 992px) {
  .permits-image {
    min-height: 350px;
  }
}

@media (max-width: 768px) {
  .permits-image {
    min-height: 300px;
  }
  
  .badge {
    padding: 0.625rem 1.25rem;
    font-size: 1rem;
  }
}

@media (max-width: 576px) {
  .permits-image {
    min-height: 250px;
  }
  
  .image-overlay {
    padding: 1.5rem;
  }
}
</style>