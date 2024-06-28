import React from 'react';

function GioiThieu() {
  return (
    <div>
      <div
        className="d-flex"
        style={{
          marginTop: '20px',
          justifyContent: 'space-between',
          marginLeft: '200px',
          marginRight: '200px',
          alignItems: 'center',
        }}
      >
        <div style={{ backgroundColor: '#D3E4C4', padding: '20px', borderRadius: '10px', margin: '0 5px' }}>
          <h3 style={{ color: '#006400' }}>Giới thiệu</h3>
          <p>
            <span style={{ marginLeft: '20px' }}>
              Thư viện Tri thức xanh là một điểm đến độc đáo và phong phú cho những người đam mê khám phá và học hỏi.
              Được thiết kế với sự chú trọng đặc biệt đến việc bảo vệ môi trường và phát triển bền vững, thư viện này
              không chỉ là nơi lưu trữ sách mà còn là trung tâm tài nguyên văn hóa và giáo dục độc đáo.
            </span>
            <br />
            <span style={{ marginLeft: '20px' }}>
              Thư viện Tri thức xanh không chỉ tập trung vào việc cung cấp sách và tài liệu đa dạng về mọi chủ đề mà còn
              thúc đẩy những giá trị về bảo vệ môi trường và phát triển xanh.Từ các cuốn sách về sinh thái học, năng
              lượng tái tạo đến sách về chủ đề bền vững và tái chế, thư viện này mang đến cho người đọc cơ hội để hiểu
              rõ hơn về các vấn đề liên quan đến môi trường và cách sống xanh.
            </span>
            <br />
            <span style={{ marginLeft: '20px' }}>
              Ngoài ra, Thư viện Tri thức xanh thường tổ chức các sự kiện và hoạt động thú vị như buổi thảo luận,
              workshop và triển lãm về các chủ đề liên quan đến bảo vệ môi trường và phát triển bền vững. Đây là cơ hội
              tuyệt vời để cộng đồng kết nối, chia sẻ ý kiến và tạo ra những giải pháp sáng tạo cho các vấn đề môi
              trường hiện nay.
            </span>
            <br />
            <span style={{ marginLeft: '20px' }}>
              Tóm lại, Thư viện Tri thức xanh không chỉ là một nguồn tài nguyên hữu ích cho kiến thức và văn hóa mà còn
              là một địa điểm tuyệt vời để khám phá và thúc đẩy nhận thức về bảo vệ môi trường và phát triển bền vững.
            </span>
          </p>
        </div>
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQRfH5ti1mVvBwnJXarQ1ostW1FxDFhF4eF7Q&s"
          className="imgLogo mr-2"
          style={{ width: '400px', height: '300px', margin: '20px' }}
        />
      </div>

      <div
        className="d-flex"
        style={{
          marginTop: '20px',
          justifyContent: 'space-between',
          marginLeft: '200px',
          marginRight: '200px',
          alignItems: 'center',
        }}
      >
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT9FyytfRk9pKe33K5eOj4RE9dIpy2O1HUxBA&s"
          className="imgLogo mr-2"
          style={{ width: '400px', height: '300px', margin: '20px' }}
        />
        <div style={{ backgroundColor: '#D3E4C4', padding: '20px', borderRadius: '10px', margin: '0 5px' }}>
          <h4 style={{ color: '#006400' }}>
            Sách là một phần không thể thiếu trong cuộc sống của chúng ta vì chúng đóng vai trò quan trọng trong nhiều
            khía cạnh
          </h4>
          <ol>
            <li>
              Kiến thức và học tập: Sách là nguồn kiến thức chính thức và không chính thức hàng đầu. Chúng cung cấp
              thông tin, kỹ năng và thông điệp một cách cấu trúc và chi tiết. Từ việc học tập trong học viện đến việc tự
              học và nghiên cứu, sách là công cụ quan trọng để mở rộng tầm hiểu biết và nâng cao trình độ.
            </li>
            <li>
              Giải trí và giảm căng thẳng: Sách không chỉ là công cụ học hỏi mà còn là phương tiện giải trí. Việc đọc
              sách giúp giảm căng thẳng, xua tan lo âu và tạo ra một thế giới mới mở phía trước.
            </li>
            <li>
              Giáo dục: Sách không chỉ giúp cá nhân phát triển mà còn giúp xây dựng và phát triển xã hội. Chúng là cơ sở
              cho việc truyền đạt kiến thức và giáo dục đại chúng, từ việc giáo dục trẻ em đến việc tạo ra những cuộc
              thảo luận quan trọng về các vấn đề xã hội.
            </li>
            <li>
              Bảo tồn văn hóa và lịch sử: Sách là cách để bảo tồn kiến thức về văn hóa và lịch sử của con người. Chúng
              giúp duy trì và truyền đạt những giá trị truyền thống và sự hiểu biết về quá khứ.
            </li>
          </ol>
        </div>
      </div>
    </div>
  );
}

export default GioiThieu;
