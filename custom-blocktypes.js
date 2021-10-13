'use strict';

module.exports = function (processor) {
    processor.registerBlockType('brehat', function (content, block, blockLine, blockContent) {
        let img = '<img alt="Bienvenue sur l\'Île-de-Bréhat !" class="d-block w-100 h-100" src=./img/brehat.webp srcset="./img/320/brehat.webp 320w, ./img/640/brehat.webp 640w, ./img/1024/brehat.webp 1024w" sizes=50vw>';
        return content.replace(blockLine, img);
    });
    processor.registerBlockType('office', function (content, block, blockLine, blockContent) {
        let img = '<img alt="Office du tourisme" class="d-block w-100 h-100" src=./img/office.webp srcset="./img/320/office.webp 320w, ./img/640/office.webp 640w, ./img/1024/office.webp 1024w" sizes=50vw>';
        return content.replace(blockLine, img);
    });
    processor.registerBlockType('port', function (content, block, blockLine, blockContent) {
        let img = '<img alt="Port et navette" class="d-block w-100 h-100" src=./img/port.webp srcset="./img/320/port.webp 320w, ./img/640/port.webp 640w, ./img/1024/port.webp 1024w" sizes=50vw>';
        return content.replace(blockLine, img);
    });
    processor.registerBlockType('chapelle', function (content, block, blockLine, blockContent) {
        let img = '<img alt="Patrimoine et histoire" class="d-block w-100 h-100" src=./img/chapelle.webp srcset="./img/320/chapelle.webp 320w, ./img/640/chapelle.webp 640w, ./img/1024/chapelle.webp 1024w" sizes=50vw>';
        return content.replace(blockLine, img);
    });
};