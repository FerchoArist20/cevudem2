import { useEffect, useRef } from "react";
import { Dropdown, Avatar } from "flowbite-react"

function Header() {

    useEffect(() => {

    }, [])

    return (
        <header className="z-10 py-4 bg-white shadow-md">
            <div
                className="container flex items-center justify-between h-full px-6 mx-auto text-purple-600"
            >
                <div>
                    <Dropdown
                        label={<Avatar style={{width: '50%', height: '50%'}} alt="User settings" img="https://flowbite.com/docs/images/people/profile-picture-5.jpg" rounded={true} />}
                        arrowIcon={false}
                        inline={true}
                        onFocus={false}
                    >
                        <Dropdown.Header>
                            <span className="block text-sm">
                                Bonnie Green
                            </span>
                            <span className="block truncate text-sm font-medium">
                                name@flowbite.com
                            </span>
                        </Dropdown.Header>
                        <Dropdown.Item>
                            Dashboard
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Settings
                        </Dropdown.Item>
                        <Dropdown.Item>
                            Earnings
                        </Dropdown.Item>
                        <Dropdown.Divider />
                        <Dropdown.Item>
                            Sign out
                        </Dropdown.Item>
                    </Dropdown>
                </div>
            </div>
        </header>
    )
}

export default Header