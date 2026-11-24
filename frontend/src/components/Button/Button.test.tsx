import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Button } from "./Button";
import { vi } from 'vitest';
import style from './Button.module.css';

describe('Button Component', () => {
    it('calls the onClick handler when clicked', async() => {
       const onClick = vi.fn();
       const user = userEvent.setup();

       render(<Button onClick={onClick}>Submit</Button>);

       await user.click(screen.getByRole("button", {name: "Submit"}));
       expect(onClick).toHaveBeenCalledOnce();
    })

    it ("applies selected styling when selected", () => {
        render(
            <Button selected={true} onClick={()=>{}}>Period 1</Button>
        );
        const button = screen.getByRole("button");
        expect(button).toHaveClass(style.selected);
    })
})