class sound {
    name: string;
    src: string;

    public static getSoundByName(sounds: sound[], nameToFind: string): sound {
        return sounds.find( ({ name }) => name === nameToFind );
    }
}

class audioSoundEffect {
    htmlAudioElement: HTMLAudioElement;
    sound: sound;
}