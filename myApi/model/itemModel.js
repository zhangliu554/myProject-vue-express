module.exports = {
  getItemInfo(){
    let newsArr = [
      {"item":{"pid":"001","img":"assets/boys/0209f47b29b1d34386ac71a4d9715afdf2.jpg","title":"Life·After Life 中长款连帽羽绒服","price":"￥1399.00"}},
      {"item":{"pid":"002","img":"assets/boys/02de46a5e701d1dae874561237ba49e6fe.jpg","title":"AliyaStore “祈福达摩娃”Airpods保护套","price":"￥68.00"}},
      {"item":{"pid":"003","img":"assets/boys/028d0acdf5ad1261f801544a2002d3f05c.jpg","title":"AliyaStore “小柴犬”Airpods保护套","price":"￥1399.00"}},
      {"item":{"pid":"004","img":"assets/boys/014fd3cc348621454ae26c7c14c58479d8.jpg","title":"AliyaStore “日夜交替”胸针","price":"￥1399.00"}},
      {"item":{"pid":"005","img":"assets/boys/013c1c93335d7cdb29bedc9321a53fef5e.jpg","title":"AliyaStore “海浪鱼尾”胸针","price":"￥1399.00"}},
      {"item":{"pid":"006","img":"assets/boys/0148a9cf86bc0672e186a0ee5418e18df8.jpg","title":"AliyaStore “开跑车的小蛙崽”胸针","price":"￥1399.00"}},
      {"item":{"pid":"007","img":"assets/boys/0157887a01ffd3ac3cc44e702349264cc4.jpg","title":"AliyaStore “土酷青蛙君”Airpods保护套","price":"￥1399.00"}},
      {"item":{"pid":"008","img":"assets/boys/020e5fa2935e28e217df3e684cf0f8d126.jpg","title":"AliyaStore “情侣断裂滑板”胸针（含两个）","price":"￥1399.00"}},
      {"item":{"pid":"009","img":"assets/boys/02570abf0c30992c1f6a71ab206c3f790d.jpg","title":"AliyaStore “梦幻独角兽”可爱蛋糕胸针","price":"￥1399.00"}},
      {"item":{"pid":"010","img":"assets/boys/017e5e737567168226b1518220111db43a.jpg","title":"AliyaStore “深海独角鲸”胸针","price":"￥1399.00"}},
      {"item":{"pid":"011","img":"assets/boys/010b606436879174b63eeeb3c51b55edcb.jpg","title":"AliyaStore “绿色行李箱”Airpods保护套","price":"￥1399.00"}},
      {"item":{"pid":"012","img":"assets/boys/01477743ea14cc684aad69ab22faf5686a.jpg","title":"AliyaStore “笑脸”Airpods保护套","price":"￥1399.00"}},
      {"item":{"pid":"013","img":"assets/boys/02ea36281a554be7c81e543e3c8e067f7e.jpg","title":"中国李宁 2019纽约时装周系列男子时尚夹克外套","price":"￥1399.00"}},
      {"item":{"pid":"014","img":"assets/boys/017c5ae36286334b784a861ccddc06269c.jpg","title":"中国李宁 开衫无帽摇粒绒卫衣","price":"￥1399.00"}},
      {"item":{"pid":"015","img":"assets/boys/024f291bfc4d402a41ece62a1f2bd17d5d.jpg","title":"中国李宁 开衫无帽摇粒绒卫衣","price":"￥1399.00"}},
      {"item":{"pid":"016","img":"assets/boys/02446da537763b53bda81a80648bad1a5f.jpg","title":"中国李宁 系列男子保暖短棉服","price":"￥1399.00"}},
      {"item":{"pid":"017","img":"assets/boys/0209f47b29b1d34386ac71a4d9715afdf2.jpg","title":"Life·After Life 中长款连帽羽绒服","price":"￥1399.00"}},
      {"item":{"pid":"018","img":"assets/boys/02de46a5e701d1dae874561237ba49e6fe.jpg","title":"AliyaStore “祈福达摩娃”Airpods保护套","price":"￥68.00"}},
      {"item":{"pid":"019","img":"assets/boys/028d0acdf5ad1261f801544a2002d3f05c.jpg","title":"AliyaStore “小柴犬”Airpods保护套","price":"￥1399.00"}},
      {"item":{"pid":"020","img":"assets/boys/014fd3cc348621454ae26c7c14c58479d8.jpg","title":"AliyaStore “日夜交替”胸针","price":"￥1399.00"}},
      {"item":{"pid":"021","img":"assets/boys/013c1c93335d7cdb29bedc9321a53fef5e.jpg","title":"AliyaStore “海浪鱼尾”胸针","price":"￥1399.00"}},
      {"item":{"pid":"022","img":"assets/boys/0148a9cf86bc0672e186a0ee5418e18df8.jpg","title":"AliyaStore “开跑车的小蛙崽”胸针","price":"￥1399.00"}},
      {"item":{"pid":"023","img":"assets/boys/0157887a01ffd3ac3cc44e702349264cc4.jpg","title":"AliyaStore “土酷青蛙君”Airpods保护套","price":"￥1399.00"}},
      {"item":{"pid":"002","img":"assets/boys/020e5fa2935e28e217df3e684cf0f8d126.jpg","title":"AliyaStore “情侣断裂滑板”胸针（含两个）","price":"￥1399.00"}},
      {"item":{"pid":"024","img":"assets/boys/02570abf0c30992c1f6a71ab206c3f790d.jpg","title":"AliyaStore “梦幻独角兽”可爱蛋糕胸针","price":"￥1399.00"}},
      {"item":{"pid":"025","img":"assets/boys/017e5e737567168226b1518220111db43a.jpg","title":"AliyaStore “深海独角鲸”胸针","price":"￥1399.00"}},
      {"item":{"pid":"026","img":"assets/boys/010b606436879174b63eeeb3c51b55edcb.jpg","title":"AliyaStore “绿色行李箱”Airpods保护套","price":"￥1399.00"}},
      {"item":{"pid":"027","img":"assets/boys/01477743ea14cc684aad69ab22faf5686a.jpg","title":"AliyaStore “笑脸”Airpods保护套","price":"￥1399.00"}},
      {"item":{"pid":"028","img":"assets/boys/02ea36281a554be7c81e543e3c8e067f7e.jpg","title":"中国李宁 2019纽约时装周系列男子时尚夹克外套","price":"￥1399.00"}},
      {"item":{"pid":"029","img":"assets/boys/017c5ae36286334b784a861ccddc06269c.jpg","title":"中国李宁 开衫无帽摇粒绒卫衣","price":"￥1399.00"}},
      {"item":{"pid":"030","img":"assets/boys/024f291bfc4d402a41ece62a1f2bd17d5d.jpg","title":"中国李宁 开衫无帽摇粒绒卫衣","price":"￥1399.00"}},
      {"item":{"pid":"031","img":"assets/boys/02446da537763b53bda81a80648bad1a5f.jpg","title":"中国李宁 系列男子保暖短棉服","price":"￥1399.00"}},
      {"item":{"pid":"032","img":"assets/boys/02f0796e482565fcdc86d01170dfc2e0a7.jpg","title":"奇居良品 高枝仿真绣球花 沐尔桶花瓶中号+高枝绣球花5枝","price":"￥1399.00"}},
      {"item":{"pid":"033","img":"assets/boys/01c4115c5186369b6cef48a25924ce2c99.jpg","title":"奇居良品 高枝仿真绣球花 瓦萨花瓶大号+高枝绣球花7枝","price":"￥68.00"}},
      {"item":{"pid":"034","img":"assets/boys/01cfff8f9f3e6b38147751d879b746f13f.jpg","title":"奇居良品 简约客厅山茶花整体花艺 兰迪特花瓶A款+山茶花10枝+葵叶1枝","price":"￥1399.00"}},
      {"item":{"pid":"035","img":"assets/boys/0126bebceaabff4c09bcc15d96e02229ed.jpg","title":"奇居良品 简约客厅山茶花整体花艺 贝茜花瓶大号+山茶花9枝","price":"￥1399.00"}},
      {"item":{"pid":"036","img":"assets/boys/022a3fd52d5ceb94c2376e2746f9f03caf.jpg","title":"奇居良品 高枝仿真绣球花 格林花瓶B款小号+高枝绣球花7枝","price":"￥1399.00"}},
      {"item":{"pid":"037","img":"assets/boys/022a7eb88175fa99d4b5aa4447c874f9bc.jpg","title":"奇居良品 hani陶瓷花瓶大号+仿真绿植6叶葵叶+山茶花","price":"￥1399.00"}},
      {"item":{"pid":"038","img":"assets/boys/01cfff8f9f3e6b38147751d879b746f13f.jpg","title":"奇居良品 简约家用客厅整体花艺 兰迪特花瓶B款+玫瑰16枝","price":"￥1399.00"}},
      {"item":{"pid":"039","img":"assets/boys/0158beddd7dd00ce228c5a1a9571d53c4d.jpg","title":"奇居良品 hani简约陶瓷花瓶黑色小号+五叉薰衣草","price":"￥1399.00"}},
      {"item":{"pid":"040","img":"assets/boys/02570abf0c30992c1f6a71ab206c3f790d.jpg","title":"AliyaStore “梦幻独角兽”可爱蛋糕胸针","price":"￥1399.00"}},
      {"item":{"pid":"041","img":"assets/boys/017e5e737567168226b1518220111db43a.jpg","title":"AliyaStore “深海独角鲸”胸针","price":"￥1399.00"}},
      {"item":{"pid":"042","img":"assets/boys/010b606436879174b63eeeb3c51b55edcb.jpg","title":"AliyaStore “绿色行李箱”Airpods保护套","price":"￥1399.00"}},
      {"item":{"pid":"043","img":"assets/boys/01477743ea14cc684aad69ab22faf5686a.jpg","title":"AliyaStore “笑脸”Airpods保护套","price":"￥1399.00"}},
      {"item":{"pid":"045","img":"assets/boys/02ea36281a554be7c81e543e3c8e067f7e.jpg","title":"中国李宁 2019纽约时装周系列男子时尚夹克外套","price":"￥1399.00"}},
      {"item":{"pid":"046","img":"assets/boys/017c5ae36286334b784a861ccddc06269c.jpg","title":"中国李宁 开衫无帽摇粒绒卫衣","price":"￥1399.00"}},
      {"item":{"pid":"047","img":"assets/boys/024f291bfc4d402a41ece62a1f2bd17d5d.jpg","title":"中国李宁 开衫无帽摇粒绒卫衣","price":"￥1399.00"}},
      {"item":{"pid":"048","img":"assets/boys/02446da537763b53bda81a80648bad1a5f.jpg","title":"中国李宁 系列男子保暖短棉服","price":"￥1399.00"}},
      {"item":{"pid":"049","img":"assets/boys/01bdf1d5f9c2f25b83512299461134882d.jpg","title":"KXTOYS GG case-Lucky gogo01（iPhone 7）","price":"￥1399.00"}},
      {"item":{"pid":"050","img":"assets/boys/02de46a5e701d1dae874561237ba49e6fe.jpg","title":"AliyaStore “祈福达摩娃”Airpods保护套","price":"￥68.00"}},
      {"item":{"pid":"051","img":"assets/boys/01d157c5ab57a3ab8745378833eb21e308.jpg","title":"AliyaStore “KXTOYS 2.5″Lucky gogo_Pingo","price":"￥1399.00"}},
      {"item":{"pid":"052","img":"assets/boys/02af8110a81e6759196c0a271c31c784fd.jpg","title":"KXTOYS 2.5英寸Happy gogo DIY涂装玩偶","price":"￥1399.00"}},
      {"item":{"pid":"053","img":"assets/boys/011e810f07216bbf88ff5dc74f2cca5fe2.jpg","title":"KXTOYS 2.5英寸Gopanda DIY涂装玩偶","price":"￥1399.00"}},
      {"item":{"pid":"054","img":"assets/boys/01768e4303a0a6de48dc7334409ac822cf.jpg","title":"KXTOYS 2.5 Mr.Hero_足球英雄（广州）","price":"￥1399.00"}},
      {"item":{"pid":"055","img":"assets/boys/016a9f1e1bce3d2fbf6a17fdc3446c80da.jpg","title":"KXTOYS 2.5″Lucky gogo_Gogo Lee","price":"￥1399.00"}},
      {"item":{"pid":"056","img":"assets/boys/022536c1d41dc96c17f76add4eb53c9734.jpg","title":"2.8英寸Mr.Hero_狼MAN","price":"￥1399.00"}},
      {"item":{"pid":"057","img":"assets/boys/02570abf0c30992c1f6a71ab206c3f790d.jpg","title":"AliyaStore “梦幻独角兽”可爱蛋糕胸针","price":"￥1399.00"}},
      {"item":{"pid":"058","img":"assets/boys/017e5e737567168226b1518220111db43a.jpg","title":"AliyaStore “深海独角鲸”胸针","price":"￥1399.00"}},
      {"item":{"pid":"059","img":"assets/boys/010b606436879174b63eeeb3c51b55edcb.jpg","title":"AliyaStore “绿色行李箱”Airpods保护套","price":"￥1399.00"}},
      {"item":{"pid":"060","img":"assets/boys/01477743ea14cc684aad69ab22faf5686a.jpg","title":"AliyaStore “笑脸”Airpods保护套","price":"￥1399.00"}},
      {"item":{"pid":"061","img":"assets/boys/02ea36281a554be7c81e543e3c8e067f7e.jpg","title":"中国李宁 2019纽约时装周系列男子时尚夹克外套","price":"￥1399.00"}},
      {"item":{"pid":"062","img":"assets/boys/017c5ae36286334b784a861ccddc06269c.jpg","title":"中国李宁 开衫无帽摇粒绒卫衣","price":"￥1399.00"}},
      {"item":{"pid":"063","img":"assets/boys/024f291bfc4d402a41ece62a1f2bd17d5d.jpg","title":"中国李宁 开衫无帽摇粒绒卫衣","price":"￥1399.00"}},
      {"item":{"pid":"064","img":"assets/boys/02446da537763b53bda81a80648bad1a5f.jpg","title":"中国李宁 系列男子保暖短棉服","price":"￥1399.00"}},
        ];
    return newsArr;
  }
};
