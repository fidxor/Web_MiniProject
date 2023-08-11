import { useState } from 'react'
import WishListItem from './WishListItem';

function WishList() {
    // axios 를 사용해서 서버에서 받아야함 일단 하드코딩
    
    const items = [
      { id : 1,
        img : '//thumbnail10.coupangcdn.com/thumbnails/remote/120x120ex/image/retail/images/10395318651159-0a8a970c-f5ca-433d-8b6d-61d75fed7856.JPG',
        productName : '서울우유 더 진한 순수 플레인 요거트, 1.8L, 1개',
        price : 6700,
      },
      { id : 2,
          img : '//thumbnail10.coupangcdn.com/thumbnails/remote/120x120ex/image/retail/images/9444795571075153-1a54e47e-2228-454f-a4ec-13ed4a766468.jpg',
          productName : '투데이넛 너트한줌 후르츠 견과 선물세트 30개입',
          price : 13290,
        },
        { id : 3,
          img : '//thumbnail8.coupangcdn.com/thumbnails/remote/120x120ex/image/retail/images/515743752899172-0f32c471-74b9-4e09-ad7d-b42b3474a4ca.jpg',
          productName : '곰곰 국내산 감자',
          price : 3500,
        },
    ]

    let totalPrice = 0
    for(let i = 0; i < items.length; i++){
      totalPrice = totalPrice + items[i].price
    }

    return (
      <>
      <h1>여기가 장바구니</h1>

      <div>
          {items.map(item => (
              <WishListItem key={item.id} item={item} />
          ))}
      </div>
      <div>
        총 금액 : {totalPrice}
      </div>
      </>
  );
}

export default WishList;