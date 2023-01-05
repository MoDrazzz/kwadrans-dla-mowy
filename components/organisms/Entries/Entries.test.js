import {fireEvent, screen} from '@testing-library/react';
import '@testing-library/jest-dom';
import Entries from 'components/organisms/Entries/Entries';
import renderWithProviders from 'helpers/renderWithProviders';

it('loads and displays greeting', async () => {
  // ARRANGE
  renderWithProviders(<Entries entriesRef={()=>{}} />)

  // ACT
  const fullNameInput = screen.getByTestId("fullNameInput");
  fireEvent.change(fullNameInput, {target: {value: 'Abcd Efgh'}});
  expect(fullNameInput.value).toBe("Abcd Efgh")
  
  const mailInput = screen.getByTestId("mailInput");
  fireEvent.change(mailInput, {target: {value: 'mail@example.com'}});
  expect(mailInput.value).toBe("mail@example.com");

  const messageTextarea = screen.getByTestId("messageTextarea");
  fireEvent.change(messageTextarea, {target: {value: 'Message.'}});
  expect(messageTextarea.value).toBe("Message.");

  const submitButton = screen.getByRole('button', { name: /wyślij/i });
  fireEvent.click(submitButton);

  // console.log(input);
  // ASSERT
})

