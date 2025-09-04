export const generateNameVehicle = vehicle_type => {
  const electricVehicleTypes = [
    'VF e34',
    'Tesla Model S',
    'Kia Soul EV',
    'MG ZS EV',
    'Volkswagen ID.3',
    'Hyundai Kona Electric',
    'Honda E',
    'Nissan Leaf',
    'Peugeot E-208',
    'Polestar 2',
    'Tesla Model 3'
  ];

  return (
    electricVehicleTypes[vehicle_type] || `Unknown Vehicle ${vehicle_type}`
  );
};

export const generatePathImage = vehicle_type => {
  const pathImages = [
    'https://vinfastvietnam.net.vn/uploads/data/3097/files/files/xe%20%C4%91i%E1%BB%87n%20vf%20e34/nt1.jpg',
    'https://www.greenncap.com/wp-content/uploads/tesla-model-s-2023-0152-1024x685.png',
    'https://cdn-www.pod-point.com/Soul-white-background-2.jpg?v=1558017052',
    'https://imgd.aeplcdn.com/664x374/n/cw/ec/110437/zs-ev-exterior-right-front-three-quarter-69.jpeg?isig=0&q=80',
    'https://www.ezoomed.com/wp-content/uploads/2021/04/VW-9.jpg',
    'https://imgd.aeplcdn.com/664x374/n/cw/ec/29580/kona-electric-exterior-right-front-three-quarter-162254.jpeg?isig=0&wm=1&q=80',
    'https://otohonda.com.vn/wp-content/uploads/Danh-gia-Honda-e-Concept-2019-Mau-xe-dien-do-thi-nho-gon-hien-dai-va-thong-minh.jpg',
    'https://www.carmudi.vn/_next/image/?url=https://static.carmudi.vn/wp-content/uploads/2018/04/104-soi-thiet-ke-noi-ngoai-that-va-dong-co-cua-nissan-leaf-2018-moi-duoc-ra-mat1-640x423.jpg&w=1200&q=75',
    'https://www.ezoomed.com/wp-content/uploads/2021/04/e-208-2.jpg',
    'https://d2ivfcfbdvj3sm.cloudfront.net/gXD2BcHcndvlzbCC/52680/color_no_cr/color_0640_032_png/MY2023/52680/52680_cc0640_032_707.png?c=172&p=243&s=hvCl1Glc57x3GGs_prF4ac',
    'https://www.mojelektromobil.sk/wp-content/uploads/2020/10/model-3-performance-1-1192x687.jpg'
  ];

  return pathImages[vehicle_type] || '';
};

export const generateTextStatus = status => {
  switch (status) {
    case 1:
      return 'Chờ nhận xe';
    case 2:
      return 'Đã có khách';
    case 3:
      return 'Hoàn thành';
    case 4:
      return 'Hủy đơn';
    default:
      return 'Chờ nhận xe';
  }
};

export const generateClassStatus = status => {
  switch (status) {
    case 1:
      return 'success';
    case 2:
      return 'primary';
    case 3:
      return 'warning';
    case 4:
      return 'error';
    default:
      return 'success';
  }
};

export const generateTextStatusVehicle = status => {
  switch (status) {
    case 1:
      return 'Free';
    case 2:
      return 'Đã có khách';
    case 3:
      return 'Hết pin';
    case 4:
      return 'Hỏng';
    default:
      return 'Free';
  }
};

export const generateClassStatusBattery = status => {
  if (status >= 80) {
    return 'success';
  } else if (status > 20) {
    return 'primary';
  } else {
    return 'error';
  }
};
