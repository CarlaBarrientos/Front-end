let inputName = document.getElementById('input-name');
if (inputName) {
    inputName.addEventListener('click', function () {
        document.getElementById('helper-text').value = 'Write the name of the Pokemon you want to save.';
    });
}
let description = document.getElementById('input-desc');
if (description) {
    description.addEventListener('click', function () {
        document.getElementById('helper-text').value = 'Write a brief description of the Pokemon you want to save, include its characteristics, what it loves/hates to eat, etc.';
    });
}
let url = document.getElementById('input-url');
if (url) {
    url.addEventListener('click', function () {
        document.getElementById('helper-text').value = 'Attach the image URL of the Pokemon you want to save.';
    });
}
let height = document.getElementById('input-height');
if (height) {
    height.addEventListener('click', function () {
        document.getElementById('helper-text').value = 'Enter the height of this Pokémon in decimetres.';
    });
}
let weight = document.getElementById('input-weight');
if (weight) {
    weight.addEventListener('click', function () {
        document.getElementById('helper-text').value = 'Enter the weight of this Pokémon in hectograms.';
    });
}
let color = document.getElementById('input-color');
if (color) {
    color.addEventListener('click', function () {
        document.getElementById('helper-text').value = 'What is the color that most closely resembles your pokemon? Select the one from the options.';
    });
}
let egg = document.getElementById('input-egg');
if (egg) {
    egg.addEventListener('click', function () {
        document.getElementById('helper-text').value = `Select the correct group for your new Pokemon, here you have a brief description of each one:
Monster Group: Pokémon in this group are saurian/kaiju-like in appearance and nature.
Water 1 Group: Pokémon in this group are amphibious in nature.
Bug Group: Pokémon in this group are insectoid (bug-like) in appearance.
Flying Group: Pokémon in this group are avian (birdlike) in appearance.
Field Group: The largest group, Pokémon here are terrestrial in nature. In Stadium 2, this Egg Group was known as "Ground".
Fairy Group: Pokémon in this group are petite and considered very cute.
Grass Group: Pokémon in this group are plantlike in appearance. In Stadium 2, this Egg Group was known as "Plant".
Human-Like Group: Pokémon in this group are fully bipedal. In Stadium 2, this Egg Group was known as "Humanshape".
Water 3 Group: Pokémon in this group resemble aquatic invertebrates.
Mineral Group: Pokémon in this group are inorganic in nature.
Amorphous Group: Pokémon in this group are amorphous, having no definite form. In Stadium 2, this Egg Group was known as "Indeterminate".
Water 2 Group: Pokémon in this group are piscine (fishlike) in appearance.
Ditto Group: As the name implies, Ditto is the only Pokémon in this group, and is capable of breeding with all other Pokémon (regardless of gender) aside from those in the No Eggs Discovered and Ditto groups.
Dragon Group: Pokémon in this group are draconic in appearance.
No Eggs Discovered Group: Pokémon in this group are unable to breed. In Stadium 2, this Egg Group was known as "No eggs".`;
    });
}
