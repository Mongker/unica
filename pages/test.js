/**
 * Copyright 2020 present, Đào Thị Thanh Mai.
 * All rights reserved.
 * @author Mongker on 19/03/2021
 * @email: monglv36@gmail.com
 * @student_code: 68DCHT20091
 * @university: UTT (Đại học Công Nghệ Giao Thông Vận Tải)
 */

import Image from 'next/image'

function Home() {
    return (
        <>
            <h1>My Homepage</h1>
            <Image
                src="/avatar.jpg"
                alt="Picture of the author"
                width={500}
                height={500}
            />
            <p>Welcome to my homepage!</p>
        </>
    )
}

export default Home
