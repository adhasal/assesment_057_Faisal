// controllers/BarangController.js
import Barang from '../models/BarangModel.js';

export const getBarang = async (req, res) => {
  try {
    const response = await Barang.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const getBarangById = async (req, res) => {
  try {
    const response = await Barang.findOne({
      where: {
        KodeBarang: req.params.kodeBarang,
      },
    });
    if (response) {
      res.status(200).json(response);
    } else {
      res.status(404).json({ error: 'Barang not found' });
    }
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const createBarang = async (req, res) => {
  try {
    await Barang.create(req.body);
    res.status(201).json({ msg: 'Barang Created' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const updateBarang = async (req, res) => {
  try {
    await Barang.update(req.body, {
      where: {
        KodeBarang: req.params.kodeBarang,
      },
    });
    res.status(200).json({ msg: 'Barang Updated' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

export const deleteBarang = async (req, res) => {
  try {
    await Barang.destroy({
      where: {
        KodeBarang: req.params.kodeBarang,
      },
    });
    res.status(200).json({ msg: 'Barang Deleted' });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
