import { EventEmitter, Injectable } from '@angular/core';
import { Items } from './item.model';
import { Subject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ItemService {

  itemSelected = new EventEmitter<Items>();
  sum = 0;


  onChangeItem: Subject<Items[]> = new Subject<Items[]>();

  private items: Items[] = [
    new Items('Samsung Galaxy S21', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
      'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
      3, ['good', 'bad', 'okok'], 22000000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-8-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-11-org.jpg',]),

    new Items('OPPO A93', 'OPPO','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'OPPO đã tung ra OPPO A93 dòng sản phẩm thuộc phân khúc điện thoại tầm trung được xem là tiếp nối từ OPPO A92 với nhiều điểm được nâng cấp như hiệu năng, hệ thống camera cùng khả năng sạc nhanh 18 W.',
      'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
      5, ['good', 'bad', 'okok'], 5900000, 3, [3, 5, 3], 3.0,
      ['https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-4-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-5-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-12-org.jpg']),

    new Items('ViVo Y51', 'ViVo','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Vivo đã mang chiếc điện thoại Vivo Y51 một lần nữa quay trở lại với người dùng trong một thiết kế hoàn toàn mới, nâng cấp từ công nghệ màn hình, cụm camera đến hệ điều hành với tên gọi Vivo Y51 (2020).',
      'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
      10, ['good', 'bad', 'okok'], 5790000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-10-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-11-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-12-org.jpg']),

    new Items('SamSung Galaxy G51', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Galaxy M51 thuộc thế hệ Galaxy M đến từ Samsung và được nằm trong phân khúc giá tầm trung. Máy được nâng cấp và cải tiến với camera góc siêu rộng, dung lượng pin siêu khủng cùng vẻ ngoài sang trọng và thời thượng.',
      'https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
      3, ['good', 'bad', 'okok'], 8990000, 3, [3, 5, 3], 3.3,
      ['https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-camera.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-selfie.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-giaodien.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-thietke.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/samsung-galaxy-m51-tong-quan-780x433.jpg']),

    new Items('SamSung Z Fold', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Thuộc dòng smartphone cao cấp, Samsung Galaxy Z Fold2 5G được Samsung trau chuốt không chỉ vẻ ngoài sang trọng, tinh tế mà lẫn cả “nội thất” bên trong đầy mạnh mẽ khiến chiếc smartphone này hoàn toàn xứng đáng để được sở hữu.',
      'https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
      10, ['good', 'bad', 'okok'], 50000000, 10, [3, 5, 3], 4.9,
      ['https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10411212.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040461.gif',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040420.gif',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10410911.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1041007.jpg']),

    new Items('Samsung Galaxy S21', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
      'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
      3, ['good', 'bad', 'okok'], 22000000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-8-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-11-org.jpg',]),

    new Items('OPPO A93', 'OPPO','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'OPPO đã tung ra OPPO A93 dòng sản phẩm thuộc phân khúc điện thoại tầm trung được xem là tiếp nối từ OPPO A92 với nhiều điểm được nâng cấp như hiệu năng, hệ thống camera cùng khả năng sạc nhanh 18 W.',
      'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
      5, ['good', 'bad', 'okok'], 5900000, 3, [3, 5, 3], 3.0,
      ['https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-4-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-5-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-12-org.jpg']),
        new Items('Samsung Galaxy S21', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        3, ['good', 'bad', 'okok'], 22000000, 3, [3, 5, 3], 4.5,
        ['https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-6-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-8-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-11-org.jpg',]),
  
      new Items('OPPO A93', 'OPPO','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'OPPO đã tung ra OPPO A93 dòng sản phẩm thuộc phân khúc điện thoại tầm trung được xem là tiếp nối từ OPPO A92 với nhiều điểm được nâng cấp như hiệu năng, hệ thống camera cùng khả năng sạc nhanh 18 W.',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
        5, ['good', 'bad', 'okok'], 5900000, 3, [3, 5, 3], 3.0,
        ['https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-1-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-4-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-5-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-6-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-12-org.jpg']),
  
      new Items('ViVo Y51', 'ViVo','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Vivo đã mang chiếc điện thoại Vivo Y51 một lần nữa quay trở lại với người dùng trong một thiết kế hoàn toàn mới, nâng cấp từ công nghệ màn hình, cụm camera đến hệ điều hành với tên gọi Vivo Y51 (2020).',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
        10, ['good', 'bad', 'okok'], 5790000, 3, [3, 5, 3], 4.5,
        ['https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-1-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-6-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-10-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-11-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-12-org.jpg']),
  
      new Items('SamSung Galaxy G51', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Galaxy M51 thuộc thế hệ Galaxy M đến từ Samsung và được nằm trong phân khúc giá tầm trung. Máy được nâng cấp và cải tiến với camera góc siêu rộng, dung lượng pin siêu khủng cùng vẻ ngoài sang trọng và thời thượng.',
        'https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
        3, ['good', 'bad', 'okok'], 8990000, 3, [3, 5, 3], 3.3,
        ['https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-camera.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-selfie.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-giaodien.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-thietke.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/samsung-galaxy-m51-tong-quan-780x433.jpg']),
  
      new Items('SamSung Z Fold', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Thuộc dòng smartphone cao cấp, Samsung Galaxy Z Fold2 5G được Samsung trau chuốt không chỉ vẻ ngoài sang trọng, tinh tế mà lẫn cả “nội thất” bên trong đầy mạnh mẽ khiến chiếc smartphone này hoàn toàn xứng đáng để được sở hữu.',
        'https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
        10, ['good', 'bad', 'okok'], 50000000, 10, [3, 5, 3], 4.9,
        ['https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10411212.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040461.gif',
          'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040420.gif',
          'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10410911.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1041007.jpg']),
  
      new Items('Samsung Galaxy S21', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        3, ['good', 'bad', 'okok'], 22000000, 3, [3, 5, 3], 4.5,
        ['https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-6-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-8-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-11-org.jpg',]),
  
      new Items('OPPO A93', 'OPPO','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'OPPO đã tung ra OPPO A93 dòng sản phẩm thuộc phân khúc điện thoại tầm trung được xem là tiếp nối từ OPPO A92 với nhiều điểm được nâng cấp như hiệu năng, hệ thống camera cùng khả năng sạc nhanh 18 W.',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
        5, ['good', 'bad', 'okok'], 5900000, 3, [3, 5, 3], 3.0,
        ['https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-1-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-4-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-5-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-6-org.jpg',
          'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-12-org.jpg']),new Items('Samsung Galaxy S21', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
          'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
          3, ['good', 'bad', 'okok'], 22000000, 3, [3, 5, 3], 4.5,
          ['https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-6-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-8-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-11-org.jpg',]),
    
        new Items('OPPO A93', 'OPPO','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'OPPO đã tung ra OPPO A93 dòng sản phẩm thuộc phân khúc điện thoại tầm trung được xem là tiếp nối từ OPPO A92 với nhiều điểm được nâng cấp như hiệu năng, hệ thống camera cùng khả năng sạc nhanh 18 W.',
          'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
          5, ['good', 'bad', 'okok'], 5900000, 3, [3, 5, 3], 3.0,
          ['https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-1-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-4-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-5-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-6-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-12-org.jpg']),
    
        new Items('ViVo Y51', 'ViVo','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Vivo đã mang chiếc điện thoại Vivo Y51 một lần nữa quay trở lại với người dùng trong một thiết kế hoàn toàn mới, nâng cấp từ công nghệ màn hình, cụm camera đến hệ điều hành với tên gọi Vivo Y51 (2020).',
          'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
          10, ['good', 'bad', 'okok'], 5790000, 3, [3, 5, 3], 4.5,
          ['https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-1-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-6-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-10-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-11-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-12-org.jpg']),
    
        new Items('SamSung Galaxy G51', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Galaxy M51 thuộc thế hệ Galaxy M đến từ Samsung và được nằm trong phân khúc giá tầm trung. Máy được nâng cấp và cải tiến với camera góc siêu rộng, dung lượng pin siêu khủng cùng vẻ ngoài sang trọng và thời thượng.',
          'https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
          3, ['good', 'bad', 'okok'], 8990000, 3, [3, 5, 3], 3.3,
          ['https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-camera.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-selfie.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-giaodien.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-thietke.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/samsung-galaxy-m51-tong-quan-780x433.jpg']),
    
        new Items('SamSung Z Fold', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Thuộc dòng smartphone cao cấp, Samsung Galaxy Z Fold2 5G được Samsung trau chuốt không chỉ vẻ ngoài sang trọng, tinh tế mà lẫn cả “nội thất” bên trong đầy mạnh mẽ khiến chiếc smartphone này hoàn toàn xứng đáng để được sở hữu.',
          'https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
          10, ['good', 'bad', 'okok'], 50000000, 10, [3, 5, 3], 4.9,
          ['https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10411212.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040461.gif',
            'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040420.gif',
            'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10410911.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1041007.jpg']),
    
        new Items('Samsung Galaxy S21', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
          'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
          3, ['good', 'bad', 'okok'], 22000000, 3, [3, 5, 3], 4.5,
          ['https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-6-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-8-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-11-org.jpg',]),
    
        new Items('OPPO A93', 'OPPO','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'OPPO đã tung ra OPPO A93 dòng sản phẩm thuộc phân khúc điện thoại tầm trung được xem là tiếp nối từ OPPO A92 với nhiều điểm được nâng cấp như hiệu năng, hệ thống camera cùng khả năng sạc nhanh 18 W.',
          'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
          5, ['good', 'bad', 'okok'], 5900000, 3, [3, 5, 3], 3.0,
          ['https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-1-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-4-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-5-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-6-org.jpg',
            'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-12-org.jpg']),new Items('Samsung Galaxy S21', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
      'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
      3, ['good', 'bad', 'okok'], 22000000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-8-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-11-org.jpg',]),

    new Items('OPPO A93', 'OPPO','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'OPPO đã tung ra OPPO A93 dòng sản phẩm thuộc phân khúc điện thoại tầm trung được xem là tiếp nối từ OPPO A92 với nhiều điểm được nâng cấp như hiệu năng, hệ thống camera cùng khả năng sạc nhanh 18 W.',
      'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
      5, ['good', 'bad', 'okok'], 5900000, 3, [3, 5, 3], 3.0,
      ['https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-4-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-5-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-12-org.jpg']),

    new Items('ViVo Y51', 'ViVo','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Vivo đã mang chiếc điện thoại Vivo Y51 một lần nữa quay trở lại với người dùng trong một thiết kế hoàn toàn mới, nâng cấp từ công nghệ màn hình, cụm camera đến hệ điều hành với tên gọi Vivo Y51 (2020).',
      'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
      10, ['good', 'bad', 'okok'], 5790000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-10-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-11-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-12-org.jpg']),

    new Items('SamSung Galaxy G51', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Galaxy M51 thuộc thế hệ Galaxy M đến từ Samsung và được nằm trong phân khúc giá tầm trung. Máy được nâng cấp và cải tiến với camera góc siêu rộng, dung lượng pin siêu khủng cùng vẻ ngoài sang trọng và thời thượng.',
      'https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
      3, ['good', 'bad', 'okok'], 8990000, 3, [3, 5, 3], 3.3,
      ['https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-camera.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-selfie.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-giaodien.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-thietke.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/samsung-galaxy-m51-tong-quan-780x433.jpg']),

    new Items('SamSung Z Fold', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Thuộc dòng smartphone cao cấp, Samsung Galaxy Z Fold2 5G được Samsung trau chuốt không chỉ vẻ ngoài sang trọng, tinh tế mà lẫn cả “nội thất” bên trong đầy mạnh mẽ khiến chiếc smartphone này hoàn toàn xứng đáng để được sở hữu.',
      'https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
      10, ['good', 'bad', 'okok'], 50000000, 10, [3, 5, 3], 4.9,
      ['https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10411212.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040461.gif',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040420.gif',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10410911.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1041007.jpg']),

    new Items('Samsung Galaxy S21', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
      'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
      3, ['good', 'bad', 'okok'], 22000000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-8-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-11-org.jpg',]),

    new Items('OPPO A93', 'OPPO','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'OPPO đã tung ra OPPO A93 dòng sản phẩm thuộc phân khúc điện thoại tầm trung được xem là tiếp nối từ OPPO A92 với nhiều điểm được nâng cấp như hiệu năng, hệ thống camera cùng khả năng sạc nhanh 18 W.',
      'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
      5, ['good', 'bad', 'okok'], 5900000, 3, [3, 5, 3], 3.0,
      ['https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-4-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-5-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-12-org.jpg']),
        
        new Items('Samsung Galaxy S21', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
      'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
      3, ['good', 'bad', 'okok'], 22000000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-8-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-11-org.jpg',]),

    new Items('OPPO A93', 'OPPO','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'OPPO đã tung ra OPPO A93 dòng sản phẩm thuộc phân khúc điện thoại tầm trung được xem là tiếp nối từ OPPO A92 với nhiều điểm được nâng cấp như hiệu năng, hệ thống camera cùng khả năng sạc nhanh 18 W.',
      'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
      5, ['good', 'bad', 'okok'], 5900000, 3, [3, 5, 3], 3.0,
      ['https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-4-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-5-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-12-org.jpg']),

    new Items('ViVo Y51', 'ViVo','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Vivo đã mang chiếc điện thoại Vivo Y51 một lần nữa quay trở lại với người dùng trong một thiết kế hoàn toàn mới, nâng cấp từ công nghệ màn hình, cụm camera đến hệ điều hành với tên gọi Vivo Y51 (2020).',
      'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
      10, ['good', 'bad', 'okok'], 5790000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-10-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-11-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-12-org.jpg']),

    new Items('SamSung Galaxy G51', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Galaxy M51 thuộc thế hệ Galaxy M đến từ Samsung và được nằm trong phân khúc giá tầm trung. Máy được nâng cấp và cải tiến với camera góc siêu rộng, dung lượng pin siêu khủng cùng vẻ ngoài sang trọng và thời thượng.',
      'https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
      3, ['good', 'bad', 'okok'], 8990000, 3, [3, 5, 3], 3.3,
      ['https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-camera.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-selfie.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-giaodien.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-thietke.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/samsung-galaxy-m51-tong-quan-780x433.jpg']),

    new Items('SamSung Z Fold', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Thuộc dòng smartphone cao cấp, Samsung Galaxy Z Fold2 5G được Samsung trau chuốt không chỉ vẻ ngoài sang trọng, tinh tế mà lẫn cả “nội thất” bên trong đầy mạnh mẽ khiến chiếc smartphone này hoàn toàn xứng đáng để được sở hữu.',
      'https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
      10, ['good', 'bad', 'okok'], 50000000, 10, [3, 5, 3], 4.9,
      ['https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10411212.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040461.gif',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040420.gif',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10410911.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1041007.jpg']),

    new Items('Samsung Galaxy S21', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
      'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
      3, ['good', 'bad', 'okok'], 22000000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-8-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-11-org.jpg',]),

    new Items('OPPO A93', 'OPPO','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'OPPO đã tung ra OPPO A93 dòng sản phẩm thuộc phân khúc điện thoại tầm trung được xem là tiếp nối từ OPPO A92 với nhiều điểm được nâng cấp như hiệu năng, hệ thống camera cùng khả năng sạc nhanh 18 W.',
      'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
      5, ['good', 'bad', 'okok'], 5900000, 3, [3, 5, 3], 3.0,
      ['https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-4-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-5-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-12-org.jpg']),
        
        new Items('Samsung Galaxy S21', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
      'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
      3, ['good', 'bad', 'okok'], 22000000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-8-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-11-org.jpg',]),

    new Items('OPPO A93', 'OPPO','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'OPPO đã tung ra OPPO A93 dòng sản phẩm thuộc phân khúc điện thoại tầm trung được xem là tiếp nối từ OPPO A92 với nhiều điểm được nâng cấp như hiệu năng, hệ thống camera cùng khả năng sạc nhanh 18 W.',
      'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
      5, ['good', 'bad', 'okok'], 5900000, 3, [3, 5, 3], 3.0,
      ['https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-4-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-5-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-12-org.jpg']),

    new Items('ViVo Y51', 'ViVo','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Vivo đã mang chiếc điện thoại Vivo Y51 một lần nữa quay trở lại với người dùng trong một thiết kế hoàn toàn mới, nâng cấp từ công nghệ màn hình, cụm camera đến hệ điều hành với tên gọi Vivo Y51 (2020).',
      'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
      10, ['good', 'bad', 'okok'], 5790000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-10-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-11-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-12-org.jpg']),

    new Items('SamSung Galaxy G51', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Galaxy M51 thuộc thế hệ Galaxy M đến từ Samsung và được nằm trong phân khúc giá tầm trung. Máy được nâng cấp và cải tiến với camera góc siêu rộng, dung lượng pin siêu khủng cùng vẻ ngoài sang trọng và thời thượng.',
      'https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
      3, ['good', 'bad', 'okok'], 8990000, 3, [3, 5, 3], 3.3,
      ['https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-camera.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-selfie.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-giaodien.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-thietke.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/samsung-galaxy-m51-tong-quan-780x433.jpg']),

    new Items('SamSung Z Fold', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Thuộc dòng smartphone cao cấp, Samsung Galaxy Z Fold2 5G được Samsung trau chuốt không chỉ vẻ ngoài sang trọng, tinh tế mà lẫn cả “nội thất” bên trong đầy mạnh mẽ khiến chiếc smartphone này hoàn toàn xứng đáng để được sở hữu.',
      'https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
      10, ['good', 'bad', 'okok'], 50000000, 10, [3, 5, 3], 4.9,
      ['https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10411212.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040461.gif',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040420.gif',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10410911.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1041007.jpg']),

    new Items('Samsung Galaxy S21', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
      'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
      3, ['good', 'bad', 'okok'], 22000000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-8-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-11-org.jpg',]),

    new Items('OPPO A93', 'OPPO','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'OPPO đã tung ra OPPO A93 dòng sản phẩm thuộc phân khúc điện thoại tầm trung được xem là tiếp nối từ OPPO A92 với nhiều điểm được nâng cấp như hiệu năng, hệ thống camera cùng khả năng sạc nhanh 18 W.',
      'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
      5, ['good', 'bad', 'okok'], 5900000, 3, [3, 5, 3], 3.0,
      ['https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-4-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-5-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-12-org.jpg']),
    new Items('ViVo Y51', 'ViVo','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Vivo đã mang chiếc điện thoại Vivo Y51 một lần nữa quay trở lại với người dùng trong một thiết kế hoàn toàn mới, nâng cấp từ công nghệ màn hình, cụm camera đến hệ điều hành với tên gọi Vivo Y51 (2020).',
      'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
      10, ['good', 'bad', 'okok'], 5790000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-10-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-11-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-12-org.jpg']),

    new Items('SamSung Galaxy G51', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Galaxy M51 thuộc thế hệ Galaxy M đến từ Samsung và được nằm trong phân khúc giá tầm trung. Máy được nâng cấp và cải tiến với camera góc siêu rộng, dung lượng pin siêu khủng cùng vẻ ngoài sang trọng và thời thượng.',
      'https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
      3, ['good', 'bad', 'okok'], 8990000, 3, [3, 5, 3], 3.3,
      ['https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-camera.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-selfie.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-giaodien.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-thietke.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/samsung-galaxy-m51-tong-quan-780x433.jpg']),

    new Items('SamSung Z Fold', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Thuộc dòng smartphone cao cấp, Samsung Galaxy Z Fold2 5G được Samsung trau chuốt không chỉ vẻ ngoài sang trọng, tinh tế mà lẫn cả “nội thất” bên trong đầy mạnh mẽ khiến chiếc smartphone này hoàn toàn xứng đáng để được sở hữu.',
      'https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
      10, ['good', 'bad', 'okok'], 50000000, 10, [3, 5, 3], 4.9,
      ['https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10411212.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040461.gif',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040420.gif',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10410911.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1041007.jpg']),

    new Items('Samsung Galaxy S21', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Motorola Moto G5 Android smartphone. Announced Feb 2017.',
      'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
      3, ['good', 'bad', 'okok'], 22000000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-8-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/220833/samsung-galaxy-s21-tim-11-org.jpg',]),

    new Items('OPPO A93', 'OPPO','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'OPPO đã tung ra OPPO A93 dòng sản phẩm thuộc phân khúc điện thoại tầm trung được xem là tiếp nối từ OPPO A92 với nhiều điểm được nâng cấp như hiệu năng, hệ thống camera cùng khả năng sạc nhanh 18 W.',
      'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
      5, ['good', 'bad', 'okok'], 5900000, 3, [3, 5, 3], 3.0,
      ['https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-den-14-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-4-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-5-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/229056/oppo-a93-trang-12-org.jpg']),

    new Items('ViVo Y51', 'ViVo','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Vivo đã mang chiếc điện thoại Vivo Y51 một lần nữa quay trở lại với người dùng trong một thiết kế hoàn toàn mới, nâng cấp từ công nghệ màn hình, cụm camera đến hệ điều hành với tên gọi Vivo Y51 (2020).',
      'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
      10, ['good', 'bad', 'okok'], 5790000, 3, [3, 5, 3], 4.5,
      ['https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-bac-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-1-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-6-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-10-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-11-org.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/228950/vivo-y51-2020-tim-bac-12-org.jpg']),

    new Items('SamSung Galaxy G51', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Galaxy M51 thuộc thế hệ Galaxy M đến từ Samsung và được nằm trong phân khúc giá tầm trung. Máy được nâng cấp và cải tiến với camera góc siêu rộng, dung lượng pin siêu khủng cùng vẻ ngoài sang trọng và thời thượng.',
      'https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
      3, ['good', 'bad', 'okok'], 8990000, 3, [3, 5, 3], 3.3,
      ['https://cdn.tgdd.vn/Products/Images/42/217536/samsung-galaxy-m51-trang-new-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-camera.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-selfie.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-giaodien.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/vi-vn-samsung-galaxy-m51-thietke.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/217536/Slider/samsung-galaxy-m51-tong-quan-780x433.jpg']),

    new Items('SamSung Z Fold', 'SamSung','blue','AMOLED 2X6.2"Full HD+','Snapdragon 888+','32GB', '8GB', 'Thuộc dòng smartphone cao cấp, Samsung Galaxy Z Fold2 5G được Samsung trau chuốt không chỉ vẻ ngoài sang trọng, tinh tế mà lẫn cả “nội thất” bên trong đầy mạnh mẽ khiến chiếc smartphone này hoàn toàn xứng đáng để được sở hữu.',
      'https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
      10, ['good', 'bad', 'okok'], 50000000, 10, [3, 5, 3], 4.9,
      ['https://cdn.tgdd.vn/Products/Images/42/232668/samsung-galaxy-z-fold-2-vang-600x600-600x600.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10411212.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040461.gif',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1040420.gif',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-10410911.jpg',
        'https://cdn.tgdd.vn/Products/Images/42/232668/Slider/samsung-galaxy-z-fold2-5g-dac-biet-221220-1041007.jpg']),


  ];

  constructor() { }

  onGetItems() {
    return this.items.slice();
  }

  getItemsById(id: number) {
    return this.items[id];
  }

  addRating(index: number, newRate: number) {
    this.items[index].ratings.push(newRate);
    this.items[index].ratingCounter++;

    this.sum = 0;

    for (const rate of this.items[index].ratings) {
      this.sum = this.sum + rate;
    }
    this.items[index].avg = parseFloat((this.sum / this.items[index].ratingCounter).toFixed(1));
    this.onChangeItem.next(this.items.slice());
  }

  deleteItem(index: number) {
    this.items.splice(index, 1);
  }

  addReview(index: number, newReview: string) {
    this.items[index].reviews.push(newReview);
    this.items[index].reviewCounter++;
    this.onChangeItem.next(this.items.slice());
  }

  add(items: Items) {
    this.items.push(items);
  }
  update(index: number, newitems: Items) {
    this.items[index] = newitems;
  }

}
