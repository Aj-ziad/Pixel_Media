
export const getGallery = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_GALLERY_URL}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const galleryData = await res.json();
    return galleryData;
  } catch (error) {
    console.error('Error fetching gallery data:', error);
    return [];
  }
};

export const getServices = async () => {
  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_SERVICES_URL}`);
    if (!res.ok) {
      throw new Error(`HTTP error! status: ${res.status}`);
    }
    const servicesData = await res.json();
    return servicesData;
  } catch (error) {
    console.error('Error fetching services data:', error);
    return [];
  }
};