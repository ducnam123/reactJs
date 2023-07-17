const adminCreate = () => {
    return <div className="mt-[30px]">
        <div className="flex">
              <div className="w-[299px] h-[100%] ">
                <ul className="ml-[20px] mt-[15px] mb-[10px]">
                  <li className="w-[180px] h-[33px] hover:bg-[#00B0D7] hover:text-center  rounded-[8px] flex mt-[5px]"><img src="\public\ihone.png" alt="" className="w-[25px] h-[26px] pt-[4px] mt-[3px]"/><p className="pt-[3px] pl-[15px]">Điện thoại</p>  </li>
                  <li className="w-[180px] h-[33px] hover:bg-[#00B0D7] hover:text-center  rounded-[8px] flex mt-[5px]"><img src="\public\Layer_2_1_.png" alt="" className="w-[30px] h-[25px] pt-[4px] mt-[3px]"/><p className="pt-[3px] pl-[10px]">laptop</p>  </li>
                  <li className="w-[180px] h-[33px] hover:bg-[#00B0D7] hover:text-center  rounded-[8px] flex mt-[5px]"><img src="\public\iphone.png" alt=""  className="w-[30px] h-[25px] pt-[4px] mt-[3px]"/><p className="pt-[3px] pl-[10px]">Máy tính bảng</p>  </li>
                  <li className="w-[180px] h-[33px] hover:bg-[#00B0D7] hover:text-center  rounded-[8px] flex mt-[5px]"><img src="\public\tainghe.png" alt="" className="w-[30px] h-[25px] pt-[4px] mt-[3px]"/><p className="pt-[3px] pl-[10px]">Âm thanh</p>  </li>

                </ul>
              </div>

              {/* thân */}
              <div className="ml-[27px]">
              <div className="text-[20px] font-semibold font-[Poppins] mb-[16px]"><p>Điện thoại</p></div>
              <div className="flex">
                  <div className="mr-[14px] font-[600] font-semibold mt-[10px]">Bộ lọc</div>
                  <div>
                    <div><span>Danh mục sản phẩm</span></div>
                    <div>
                    <select name="" id="" className="w-[352px] h-[36px] bg-[#FFFFFF] mt-[8px] mb-[14px] border-solid border-2 border-sky-100">
                      <option value="">laptop</option>
                      <option value="">điên thoại</option>
                    </select>
                    </div>
                  </div>
              </div>

              {/* table */}
              <table >
                <thead>
                  <tr className="h-[44px] bg-[#FBFBFB]">
                    <th className="w-[50px]">id</th>
                    <th className="w-[220px]">Tên sản phẩm</th>
                    <th className="w-[217px]">Thành tiền</th>
                    <th className="w-[328px]">Mô tả</th>
                    <th className="w-[152px]">Ẩn hiện</th>
                    <th className="w-[120px]">thao tác</th>
                  </tr>

                </thead>
                <tbody>
                <tr>
                    <td className="text-center pt-[12px]">1</td>
                    <td className="text-center pt-[12px]">iphone</td>
                    <td className="text-center pt-[12px]">100000 đ</td>
                    <td className="text-center pt-[12px]">là máy điện thoại thuộc phân khúc cao cấp với giá tiền </td>
                    <td className="text-center pt-[12px]"><img className="ml-[65px]" src="/public\Toggle-on.png" alt="" /></td>
                    <td className="text-center pt-[12px]"><img className="ml-[50px]" src="/public\Edit.png" alt="" /></td>
                  </tr>

                  <tr>
                    <td className="text-center pt-[12px]">1</td>
                    <td className="text-center pt-[12px]">iphone</td>
                    <td className="text-center pt-[12px]">100000 đ</td>
                    <td className="text-center pt-[12px]">là máy điện thoại thuộc phân khúc cao cấp với giá tiền </td>
                    <td className="text-center pt-[12px]"><img className="ml-[65px]" src="/public\Toggle-on.png" alt="" /></td>
                    <td className="text-center pt-[12px]"><img className="ml-[50px]" src="/public\Edit.png" alt="" /></td>
                  </tr>

                  <tr>
                    <td className="text-center pt-[12px]">1</td>
                    <td className="text-center pt-[12px]">iphone</td>
                    <td className="text-center pt-[12px]">100000 đ</td>
                    <td className="text-center pt-[12px]">là máy điện thoại thuộc phân khúc cao cấp với giá tiền </td>
                    <td className="text-center pt-[12px]"><img className="ml-[65px]" src="/public\Toggle-on.png" alt="" /></td>
                    <td className="text-center pt-[12px]"><img className="ml-[50px]" src="/public\Edit.png" alt="" /></td>
                  </tr>

                  <tr>
                    <td className="text-center pt-[12px]">1</td>
                    <td className="text-center pt-[12px]">iphone</td>
                    <td className="text-center pt-[12px]">100000 đ</td>
                    <td className="text-center pt-[12px]">là máy điện thoại thuộc phân khúc cao cấp với giá tiền </td>
                    <td className="text-center pt-[12px]"><img className="ml-[65px]" src="/public\Toggle-on.png" alt="" /></td>
                    <td className="text-center pt-[12px]"><img className="ml-[50px]" src="/public\Edit.png" alt="" /></td>
                  </tr>
                </tbody>
              </table>
              </div>
        </div>      
    </div>
}

export default adminCreate