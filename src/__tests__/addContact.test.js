const addContact = (contactName, contactPhone, contactEmail) => {
    const capitalizeName = name =>
        name.split(' ')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
            .join(' ');

    return [{ 
        name: capitalizeName(contactName),
        phone: contactPhone, 
        email: contactEmail.toLowerCase()
    }];
};

describe("Function addContact", () => {
    test("it should transform function elements into an array", () => {
        const name = "John Doe";
        const phone = 634567890;
        const email = "john.doe@example.com";


        const output = [{ name: "John Doe", phone: 634567890, email: "john.doe@example.com" }];

        expect(addContact(name, phone, email)).toEqual(output);
    });

    test("uppercase to lowercase, names having first letter capital", () => {
        const name = "JOHN DOE";
        const phone = 634567890;
        const email = "john.DOE@example.com";

        const output = [{ name: "John Doe", phone: 634567890, email: "john.doe@example.com" }];

        expect(addContact(name, phone, email)).toEqual(output);
    });

});
